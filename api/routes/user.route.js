import express from "express";
const router = express.Router();
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.get("/test", test);
//first the user will be verified by the verifyToken->IF VERIFIED THEN NEXT() FUNCTION IS CALLED which is updateUser()
router.put("/update/:userId", verifyToken, updateUser);

export default router;
