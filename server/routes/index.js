import express from 'express';
import Candidates from '../controllers/Candidates';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';
import Offices from '../controllers/Office';
import Vote from '../controllers/Vote';
import { validatePartyId, validateOfficeId, validateUserId } from '../middlewares/validateUserId';
import ValidatePostRequest from '../middlewares/ValidatePostRequest';
import validateLogin from '../middlewares/validateLogin';
import { validateParty, validatePartyName } from '../middlewares/validateParty';
import validateOffice from '../middlewares/ValidateOffice';
import CandidateValidate from '../middlewares/CandidateValidate';
import VotersValidation from '../middlewares/VotersValidation';
import Authorization from '../middlewares/Authorization';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', validatePartyId, Parties.getOneParty);
router.post('/parties', Authorization.authorize, Authorization.isAdmin, validateParty, Parties.createNewParty);
router.patch('/parties/:id/name', Authorization.authorize, Authorization.isAdmin,
  validatePartyId, validatePartyName, Parties.editPartyName);
router.delete('/parties/:id', Authorization.authorize, Authorization.isAdmin,
  validatePartyId, Parties.removeAPoliticalParty);

router.post('/auth/signup', ValidatePostRequest.validateUserSignup, Users.signup);
router.post('/auth/login', validateLogin, Users.login);

router.get('/offices', Offices.getAll);
router.get('/offices/:id', validateOfficeId, Offices.getOneOffice);
router.post('/offices', Authorization.authorize, Authorization.isAdmin, validateOffice, Offices.createOffice);

router.get('/office/candidates', Candidates.getAll);
router.post('/office/:id/register', validateUserId, Authorization.authorize, Authorization.isAdmin,
  CandidateValidate.isNumber,
  CandidateValidate.validateCandidate, CandidateValidate.noDuplication,
  Candidates.flagbearerIndicateInterest);

router.get('/office/:id/result', Vote.collateSpecificOfficeResult);
router.post('/votes', Authorization.authorize, VotersValidation.isNumber,
  VotersValidation.validateVoters, VotersValidation.noDuplication, Vote.castVote);

export default router;
