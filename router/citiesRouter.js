import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router()
const { getAllCities, getOneCity, createOneCity, updateOneCity, deleteOneCity, getCitiesPage} = citiesController

citiesRouter.get('/page/', getCitiesPage)
citiesRouter.get('/:id', getOneCity)
citiesRouter.get('/', getAllCities)

citiesRouter.post('/', createOneCity)
citiesRouter.post('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

export default citiesRouter