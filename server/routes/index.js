import express from 'express';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id', Parties.getOneParty);
router.post('/parties', Parties.createNewParty);
router.patch('/parties/:id', Parties.editPartyName);

router.post('/auth/signup', Users.signup);

export default router;
