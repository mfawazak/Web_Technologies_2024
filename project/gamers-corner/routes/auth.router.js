import express from 'express'
import { getLoginPage } from '../controllers/auth.controller.js'

const authRouter = express.Router();

authRouter.get("/login", getLoginPage)

export default authRouter