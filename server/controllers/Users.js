import bcryptJs from 'bcryptjs';
import debuggerconsole from 'debug';
import randomString from 'randomstring';
import pool from '../db/config';
import generateJwtToken from '../helpers/generateJwtToken';
import sendMail from '../helpers/sendMail';

const mydebugger = debuggerconsole('app:startup');

class Users {
  static async signup(req, res) {
    const {
      firstname, lastname, othername, email, phoneNumber, passportUrl, password
    } = req.body;

    const asignupRequest = {
      firstname, lastname, othername, email, phoneNumber, passportUrl, password
    };

    const emailSearchQuery = {
      text: 'SELECT email FROM users WHERE email=$1',
      values: [`${email}`],
      rowMode: 'array',
    };

    const isAlreadyRegistered = await pool.query(emailSearchQuery);

    if (isAlreadyRegistered.rows.length > 0) {
      return res.status(409).json({ status: 409, error: `A user with '${email}' is already registered` });
    }

    const salt = await bcryptJs.genSalt(10);
    const hashedPassword = await bcryptJs.hash(asignupRequest.password, salt);

    const { rows } = await pool
      .query(`INSERT INTO users ( firstname, lastname, othername, email, phoneNumber, passportUrl, password )
    VALUES ('${firstname}','${lastname}', '${othername}', '${email}', '${phoneNumber}'
    , '${passportUrl}', '${hashedPassword}') RETURNING id, 
    firstname, lastname, othername, phoneNumber, passportUrl, email, isAdmin`);


    const token = generateJwtToken(
      rows[0].id,
      rows[0].email,
      rows[0].isAdmin
    );

    res.status(201).json({ status: 201, data: [{ token, user: rows[0] }] });
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const userExistOrNot = {
      text: 'SELECT id, email, password, isAdmin FROM users WHERE email=$1',
      values: [`${email}`],
      rowMode: 'array',
    };

    const { rows } = await pool.query(userExistOrNot);

    if (rows.length < 1) {
      return res.status(400).json({ status: 400, error: 'Invalid email or password' });
    }

    const databasePassword = rows[0][2];

    const isValidPassword = await bcryptJs.compare(password, databasePassword);
    if (!isValidPassword) return res.status(400).json({ status: 400, error: 'Invalid email or password' });

    const token = generateJwtToken(
      rows[0][0], rows[0][1], rows[0][3]
    );

    res.status(200)
      .json(
        {
          status: 200,
          data: [{ token, user: { id: rows[0][0], email: rows[0][1], isAdmin: rows[0][3] } }]
        }
      );
  }

  static async resetPasswordInitial(req, res) {
    mydebugger(req.resetEmail);

    const {
      email
    } = req.body;

    const query = {
      text: 'SELECT id FROM users WHERE email=$1',
      values: [`${email}`],
      rowMode: 'array',
    };

    const client = await pool.connect();
    const { rows } = await pool.query(query);

    if (rows.length < 1) {
      return res.status(404).json({ status: 404, error: 'email not found' });
    }
    const foundId = rows[0][0];

    const token = randomString.generate(7);
    req.resetToken = token;
    mydebugger(req.resetToken);


    const tokenDate = new Date();
    // token valid for 10 minutes
    const tokenValidDuration = tokenDate.setMinutes(tokenDate.getMinutes() + 10);
    const validTenMinutes = tokenValidDuration / 1000;

    await pool.query(`INSERT INTO resetpassword 
    (resetuserid, resettoken, validUntil) 
    VALUES ('${foundId}', '${token}', to_timestamp('${validTenMinutes}') )`);


    const subject = 'Password Reset Notice!';
    const html = `You are recieving this because a request was made 
to change your password. Copy <strong><b>${token}<b></strong> and paste on politico
to change password. Ignore if you did not authorize this request.`;
    const userDetails = await pool.query(`select email from users
    where id='${foundId}' `);
    client.release();

    const sendingEmail = userDetails.rows[0].email;

    sendMail(subject, html, sendingEmail);

    res.status(200).json({
      status: 200,
      data: [{
        message: 'Sent mail successfully. Copy token and send paste in token column',
        email,
        token
      }]
    });
  }

  static async passwordResetComplete(req, res) {
    const {
      resetpassword,
      email,
      token
    } = req.body;

    const validEmail = email;

    const salt = await bcryptJs.genSalt(10);
    const mypassword2 = await bcryptJs.hash(resetpassword, salt);


    const query = {
      text: 'SELECT id FROM users where email = $1',
      values: [`${validEmail}`],
      rowMode: 'array',
    };


    const client = await pool.connect();
    const { rows } = await pool.query(query);

    if (rows.length < 1) {
      return res.status(404).json({ status: 404, error: 'email not found' });
    }

    mydebugger(token);
    const resetUserId = rows[0][0];
    const expiresNow = new Date() / 1000;
    const tokenReset = token;

    const checkTokenValidity = await pool
      .query(`SELECT * from resetpassword WHERE 
      resettoken='${tokenReset}' and resetuserid='${resetUserId}' and validUntil >= now() 
      and passwordresetexpiredat is null order by id desc`);
    mydebugger(checkTokenValidity.rows[0]);

    if (checkTokenValidity.rows[0] === undefined) {
      return res.status(400).json({ status: 400, error: 'Token has expired or is invalid. Please input valid token' });
    }

    await pool
      .query(`UPDATE resetpassword
      SET passwordresetexpiredat=to_timestamp('${expiresNow}') where resetuserid='${resetUserId}'
      and resettoken='${tokenReset}' and passwordresetexpiredat is null`);


    const updatedUser = await pool
      .query(`UPDATE users SET password ='${mypassword2}' 
      where id ='${resetUserId}' RETURNING id, email`);
    client.release();

    const details = updatedUser.rows[0];

    res.status(200)
      .json({
        status: 200,
        message: 'Password is reset successfully',
        details
      });
  }
}

export default Users;
