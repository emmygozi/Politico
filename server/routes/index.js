import express from "express";
import Users from "../controllers/Users";
import Parties from "../controllers/Party";

const router = express.Router();

router.get("/parties", Parties.getAll);
router.post("/parties", Parties.createNewParty);

router.post("/auth/signup", Users.signup);

export default router;
