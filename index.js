import express from "express"
import indexRouter from "./router/indexRouter.js"
import "./config/database.js"
import cors from "cors"

const server = express()

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {
    response.send('Welcome!')
})

server.listen(3000, () => { console.log('Server running on port 3000') })