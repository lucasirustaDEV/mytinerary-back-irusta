import City from '../models/City.js'
import Itinerary from '../models/Itinerary.js'

const itinerariesController = {
    getAllItineraries: async (req, res, next) => {
        let allItineraries 
        let error = null
        let success = true
        try {
            allItineraries = await Itinerary.find().populate('city')
            res.json({
                response: allItineraries,
                success,
                error
            })
        } catch (err) {
            success = false
            error = err
            next(err)
        }
    },

    getOneItinerary: async (req, res, next) => {
        //console.log(req.params)
        const { id } = req.params
        let itinerary 
        let error = null
        let success = true
        try {
            itinerary = await Itinerary.findById(id)
        } catch (err) {
            console.log(err)
            success = false
            error = err
        }
        res.json({
            response: itinerary,
            success,
            error
        })   
    },

    getItinerariesByCity: async (req, res, next) => {
        //console.log(req.params)
        const { id } = req.params
        let itinerary 
        let error = null
        let success = true
        try {
            itinerary = await Itinerary.findById(id)
        } catch (err) {
            console.log(err)
            success = false
            error = err
        }
        res.json({
            response: itinerary,
            success,
            error
        })   
    },

    createOneItinerary: async (req, res, next) => {
        let city
        let itinerary
        let error = null
        let success = true
        try {
            city = await City.findOne( { name : req.body.city })
            //console.log("City" + city)
            const query = { ... req.body }
            query.city = city._id
            itinerary = await Itinerary.create(query)
        } catch (err) {
            console.log(err)
            success: false
            error: err
        }       
        res.json({
            response: itinerary,
            success,
            error
        })     
    },

    updateOneItinerary: async (req, res, next) => {
        let city
        let success = true
        const { id } = req.params
        try {
            city = await City.findOneAndUpdate({ _id: id}, req.body, { new: true })  
            res.json({
                response: city,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    },

    deleteOneItinerary: async (req, res, next) => {
        let city
        let success = true
        const { id } = req.params
        try {
            city = await City.findOneAndDelete({ _id: id})  
            res.json({
                response: city,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    },

}

export default itinerariesController;