import express from 'express';
import Users from '../controllers/Users';
import Parties from '../controllers/Party';

const router = express.Router();

router.get('/parties', Parties.getAll);
router.get('/parties/:id(\\d+)', Parties.getOneParty);
router.post('/parties', Parties.createNewParty);
router.patch('/parties/:id(\\d+)', Parties.editPartyName);
router.delete('/parties/:id(\\d+)', Parties.removeAPoliticalParty);

router.post('/auth/signup', Users.signup);

export default router;
