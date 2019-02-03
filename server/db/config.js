import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const myDatabaseConfig = {
  database: process.env.LOCAL_DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

let connectionString;

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.DATABASE_NAME;
} else {
  connectionString = myDatabaseConfig;
}

const pool = new Pool(connectionString);

export default pool;