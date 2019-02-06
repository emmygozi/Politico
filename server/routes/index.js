import express from 'express';
import Candidates from '../controllers/Candidates';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';
import Offices from '../controllers/Office';
import { validatePartyId, validateOfficeId } from '../middlewares/validateUserId';
import ValidatePostRequest from '../middlewares/ValidatePostRequest';
import validateLogin from '../middlewares/validateLogin';
import validateParty from '../middlewares/validateParty';
import validateOffice from '../middlewares/ValidateOffice';
import CandidateValidate from '../middlewares/CandidateValidate';
import Authorization from '../middlewares/Authorization';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', validatePartyId, Parties.getOneParty);
router.post('/parties', Authorization.authorize, Authorization.isAdmin, validateParty, Parties.createNewParty);
router.patch('/parties/:id/name', Authorization.authorize, Authorization.isAdmin, validatePartyId, Parties.editPartyName);
router.delete('/parties/:id', Authorization.authorize, Authorization.isAdmin, validatePartyId, Parties.removeAPoliticalParty);

router.post('/auth/signup', ValidatePostRequest.validateUserSignup, Users.signup);
router.post('/auth/login', validateLogin, Users.login);

router.get('/offices', Offices.getAll);
router.get('/offices/:id', validateOfficeId, Offices.getOneOffice);
router.post('/offices', Authorization.authorize, Authorization.isAdmin, validateOffice, Offices.createOffice);

router.post('/office/:id/register', Authorization.authorize, CandidateValidate.isNumber,
  CandidateValidate.validateCandidate, CandidateValidate.noDuplication,
  Candidates.flagbearerIndicateInterest);

export default router;
