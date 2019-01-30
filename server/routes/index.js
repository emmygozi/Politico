import express from 'express';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';
import validateUserId from '../middlewares/validateUserId';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', validateUserId, Parties.getOneParty);
router.post('/parties', Parties.createNewParty);
router.patch('/parties/:id', validateUserId, Parties.editPartyName);
router.delete('/parties/:id', validateUserId, Parties.removeAPoliticalParty);

router.post('/auth/signup', Users.signup);

export default router;
