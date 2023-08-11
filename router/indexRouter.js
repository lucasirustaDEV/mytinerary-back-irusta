import { Router } from 'express';
import citiesRouter from './citiesRouter.js';

const indexRouter = Router()

indexRouter.get('/', (request, response, next) => {
    response.send('Welcome to de Cities server')
})

indexRouter.use('/cities', citiesRouter)


export default indexRouter