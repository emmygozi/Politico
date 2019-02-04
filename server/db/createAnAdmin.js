import debuggerconsole from 'debug';
import dotenv from 'dotenv';
import bcryptJs from 'bcryptjs';
import pool from './config';

dotenv.config();
const mydebugger = debuggerconsole('app:startup');


const createAnAdmin = async () => {
  const firstname = process.env.ADMIN_FN;
  const lastname = process.env.ADMIN_LN;
  const othername = process.env.ADMIN_ON;
  const email = process.env.ADMIN_EMAIL;
  const phoneNumber = process.env.ADMIN_PHONE;
  const passportUrl = process.env.ADMIN_PASSPORT;
  const isAdmin = 'True';
  const salt = await bcryptJs.genSalt(10);
  const hashedPassword = await bcryptJs.hash(process.env.ADMIN_PASSWORD, salt);
  const client = await pool.connect();
  await client
    .query(`INSERT INTO users ( firstname, lastname, othername, email, phoneNumber, passportUrl, password, isAdmin )
    VALUES ('${firstname}','${lastname}', '${othername}', '${email}', '${phoneNumber}'
    , '${passportUrl}', '${hashedPassword}', '${isAdmin}');`,
    () => mydebugger({ message: 'Created an Admin' }));
  client.release();
};

createAnAdmin();
