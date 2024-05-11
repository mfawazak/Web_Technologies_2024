import  express from 'express'
import { getHomePage } from '../controllers/home.controller.js'

const homeRouter = express.Router()

homeRouter.get('/', getHomePage)

export default homeRouter

