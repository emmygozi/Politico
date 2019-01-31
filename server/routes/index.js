import express from 'express';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';
import Offices from '../controllers/Office';
import validateUserId from '../middlewares/validateUserId';
import ValidatePostRequest from '../middlewares/ValidatePostRequest';
import validateParty from '../middlewares/validateParty';
import validateOffice from '../middlewares/ValidateOffice';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', validateUserId, Parties.getOneParty);
router.post('/parties', validateParty, Parties.createNewParty);
router.patch('/parties/:id', validateUserId, Parties.editPartyName);
router.delete('/parties/:id', validateUserId, Parties.removeAPoliticalParty);

router.post('/auth/signup', ValidatePostRequest.validateUserSignup, Users.signup);

router.get('/offices', Offices.getAll);
router.get('/offices/:id', validateUserId, Offices.getOneOffice);
router.post('/offices', validateOffice, Offices.createOffice);

export default router;
