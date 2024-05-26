import express from 'express';
import { getShopPage } from '../controllers/shop.controller.js';

const shopRouter = express.Router();

shopRouter.get("/:filter", getShopPage)

export default shopRouter;