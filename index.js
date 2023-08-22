import 'dotenv/config.js'
import express from "express"
import indexRouter from "./router/indexRouter.js"
import "./config/database.js"
import cors from "cors"
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFoundHandler.js'

const server = express()
server.use(cors())
server.use(express.json())

/* const corsOptions = {
    origin: 'http://localhost:5173/'
} */

server.use('/api', (req, res, next) => {
    console.log("New request from: " + req.url) //Middleware validación
    next()
},indexRouter)

server.get('/', (req, res, next) => {
    res.send('Welcome!')
})

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env.PORT, () => { console.log('Server running on port ' + process.env.PORT) })