import express from "express"
import indexRouter from "./router/indexRouter.js"

const server = express()

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {
    response.send('Welcome!')
})

server.listen(3000, () => { console.log('Server running on port 3000') })