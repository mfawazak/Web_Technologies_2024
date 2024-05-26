import  express from 'express'
import { getHomePage, addToCart, removeFromCart, logout, getCheckoutPage } from '../controllers/home.controller.js'

const homeRouter = express.Router()

homeRouter.get('/', getHomePage)
homeRouter.post('/add-to-cart', addToCart)
homeRouter.post('/remove-from-cart', removeFromCart)
homeRouter.get('/logout', logout)
homeRouter.get('/checkout', getCheckoutPage)

export default homeRouter