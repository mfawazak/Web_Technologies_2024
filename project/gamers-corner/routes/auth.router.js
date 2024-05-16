import express from 'express'
import { getLoginPage, getSignUpPage } from '../controllers/auth.controller.js'
import { signUp, login } from '../controllers/user.controller.js';

const authRouter = express.Router();

authRouter.get("/login", getLoginPage)
authRouter.get("/signup", getSignUpPage)
authRouter.post("/signup", signUp)
authRouter.post("/login", login)

export default authRouter