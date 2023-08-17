import 'dotenv/config.js'
import express from "express"
import indexRouter from "./router/indexRouter.js"
import "./config/database.js"
import cors from "cors"

const server = express()

/* const corsOptions = {
    origin: 'http://localhost:5270/'
} */

server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {
    response.send('Welcome!')
})

server.listen(process.env.PORT, () => { console.log('Server running on port ' + process.env.PORT) })