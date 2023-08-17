import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router()
const { getAllCities, getOneCity, createOneCity } = citiesController

citiesRouter.get('/', getAllCities)
citiesRouter.get('/:id', getOneCity)
citiesRouter.post('/', createOneCity)

export default citiesRouter