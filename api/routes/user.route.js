import express from "express";
const router = express.Router();
import { test, updateUser, deleteUser, signout, getUsers} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


router.get("/test", test);
//first the user will be verified by the verifyToken->IF VERIFIED THEN NEXT() FUNCTION IS CALLED which is updateUser()
router.put("/update/:userId", verifyToken, updateUser);

router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout',signout);

router.get('/getusers',verifyToken, getUsers);

export default router;
