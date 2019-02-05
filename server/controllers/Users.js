import bcryptJs from 'bcryptjs';
import pool from '../db/config';
import generateJwtToken from '../helpers/generateJwtToken';

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
      .json({ status: 200, data: [{ token, user: { id: rows[0][0], email: rows[0][1] } }] });
  }
}

export default Users;
