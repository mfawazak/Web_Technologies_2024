import express, { urlencoded } from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import homeRouter from './routes/home.router.js'
import authRouter from './routes/auth.router.js'
import mongoose from 'mongoose'
import session from 'express-session'
import flash from 'express-flash'
import cookieParser from 'cookie-parser'
import shopRouter from './routes/shop.router.js'
import cartRouter from './routes/cart.router.js'
import userRouter from './routes/user.router.js'
const SESSION_SECRET = "9484eb9c58c1d67d3e8d5a2843cd134b6b180a02"

const uri = "mongodb+srv://faaz32929:fawaz32929@gamerscorner.1gjcsxu.mongodb.net/?retryWrites=true&w=majority&appName=GamersCorner"

const app = express()
app.use(express.json())
app.use(urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(cookieParser())
app.use(express.static("public"))

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}))
app.use(flash())

mongoose.connect(uri)
    .then(() => console.log("Connected to mongoDB"))
    .catch((e) => console.log(`Error connected to mongoDB: \n ${e}`))

app.listen(3001, () => {
    console.log("server initialized!");
})

app.use('/', homeRouter)
app.use('/auth', authRouter)
app.use('/shop', shopRouter)
app.use('/cart', cartRouter)
app.use('/user', userRouter)