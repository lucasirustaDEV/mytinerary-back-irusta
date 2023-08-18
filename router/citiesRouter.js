import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router()
const { getAllCities, getOneCity, createOneCity, updateOneCity, deleteOneCity, searchCity } = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.get('/:id', getOneCity)
citiesRouter.post('/', createOneCity)
citiesRouter.post('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

citiesRouter.get('/search/:term', searchCity)

export default citiesRouter