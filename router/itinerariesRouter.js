import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router()
const { 
    getAllItineraries, 
    getOneItinerary, 
    getItinerariesByCity, 
    createOneItinerary, 
    updateOneItinerary, 
    deleteOneItinerary 
} = itinerariesController

itinerariesRouter.get('/city/:id', getItinerariesByCity)
itinerariesRouter.get('/:id', getOneItinerary)
itinerariesRouter.get('/', getAllItineraries)

itinerariesRouter.post('/', createOneItinerary)
itinerariesRouter.post('/:id', updateOneItinerary)
itinerariesRouter.delete('/:id', deleteOneItinerary)

export default itinerariesRouter