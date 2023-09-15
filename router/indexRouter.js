import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from './itinerariesRouter.js';
import authRouter from './authRouter.js';
import countriesRouter from './countriesRouter.js';
import likesRouter from './likesRouter.js';
import activitiesRouter from './activitiesRouter.js';

const indexRouter = Router()

indexRouter.get('/', (request, response, next) => {
    response.send('Welcome to de Cities server')
})

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)
indexRouter.use('/countries', countriesRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/like', likesRouter)
indexRouter.use('/activities', activitiesRouter)

export default indexRouter