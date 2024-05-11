import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import homeRouter from './routes/home.router.js'
import authRouter from './routes/auth.router.js'

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(express.static("public"))

app.listen(3000, () => {
    console.log("server initialized!");
})

app.use('/', homeRouter)
app.use('/auth', authRouter)