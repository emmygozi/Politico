import express from 'express';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';
import Offices from '../controllers/Office';
import { validatePartyId, validateOfficeId } from '../middlewares/validateUserId';
import ValidatePostRequest from '../middlewares/ValidatePostRequest';
import validateParty from '../middlewares/validateParty';
import validateOffice from '../middlewares/ValidateOffice';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', validatePartyId, Parties.getOneParty);
router.post('/parties', validateParty, Parties.createNewParty);
router.patch('/parties/:id', validatePartyId, Parties.editPartyName);
router.delete('/parties/:id', validatePartyId, Parties.removeAPoliticalParty);

router.post('/auth/signup', ValidatePostRequest.validateUserSignup, Users.signup);

router.get('/offices', Offices.getAll);
router.get('/offices/:id', validateOfficeId, Offices.getOneOffice);
router.post('/offices', validateOffice, Offices.createOffice);

export default router;
