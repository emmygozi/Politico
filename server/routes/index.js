import express from 'express';
import Users from '../controllers/Users';


const router = express.Router();

router.post(
  '/auth/signup', Users.signup
);

router.post(
    '/auth/login', Users.login
  );

export default router;