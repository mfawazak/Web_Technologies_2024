import express from 'express'
import { getProfilePage, updateProfile, updatePayment } from '../controllers/user.controller.js'
import { authenticateUser } from '../middlewares/authenticate.js';

const userRouter = express.Router();

userRouter.use(authenticateUser)

userRouter.get('/profile', getProfilePage)
userRouter.post('/profile', updateProfile)
userRouter.post('/payment', updatePayment)

export default userRouter;