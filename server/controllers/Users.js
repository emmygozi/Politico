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

    const client = await pool.connect();
    const isAlreadyRegistered = await pool.query(emailSearchQuery);

    if (isAlreadyRegistered.rows.length > 0) {
      client.release();
      return res.status(409).json({ status: 409, error: `A user with '${email}' is already registered` });
    }

    const salt = await bcryptJs.genSalt(10);
    const hashedPassword = await bcryptJs.hash(asignupRequest.password, salt);

    const { rows } = await pool
      .query(`INSERT INTO users ( firstname, lastname, othername, email, phoneNumber, passportUrl, password )
    VALUES ('${firstname}','${lastname}', '${othername}', '${email}', '${phoneNumber}'
    , '${passportUrl}', '${hashedPassword}') RETURNING id, 
    firstname, lastname, othername, phoneNumber, passportUrl, email, isAdmin`);

    client.release();

    const token = generateJwtToken(
      rows[0].id,
      rows[0].email,
      rows[0].isAdmin
    );

    res.status(201).json({ status: 201, data: [{ token, user: rows }] });
  }
}

export default Users;
