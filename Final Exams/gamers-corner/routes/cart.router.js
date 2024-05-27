import express from 'express'
import { getCartPage } from '../controllers/cart.controller.js'

const cartRouter = express.Router();

cartRouter.get("/", getCartPage)

export default cartRouter;