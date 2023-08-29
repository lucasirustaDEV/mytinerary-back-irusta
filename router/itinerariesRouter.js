import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router()
const { 
    getAllItineraries, 
    getItineraryById, 
    createItinerary, 
    updateItinerary, 
    deleteItinerary 
} = itinerariesController

itinerariesRouter.get('/', getAllItineraries)
itinerariesRouter.get('/:id', getItineraryById)

itinerariesRouter.post('/', createItinerary)
itinerariesRouter.post('/:id', updateItinerary)
itinerariesRouter.delete('/:id', deleteItinerary)

export default itinerariesRouter