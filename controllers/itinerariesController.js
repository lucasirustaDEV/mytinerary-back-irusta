import City from '../models/City.js'
import Itinerary from '../models/Itinerary.js'
import User from '../models/User.js'

const itinerariesController = {
    getAllItineraries: async (req, res, next) => {
        let allItineraries 
        let success = true
        let { city } = req.query
        let query = {}
        if (city) {
            try {
                console.log('getItinerariesByCityId')
                allItineraries = await Itinerary.find( { city : city } ).populate( {
                    path: 'activity',
                    select: 'title image -_id'
                }).populate( {
                    path: 'provider',
                    select: 'name surname profile_pic -_id'
                })
                res.json({
                    response: allItineraries,
                    success
                })  
            } catch (error) {
                success: false
                next(error)    
            }
 
        }else{
            try {
                //allItineraries = await Itinerary.find().populate('city')
                allItineraries = await Itinerary.find().populate( {
                    path: 'city',
                    select: 'name -_id'
                }).populate( {
                    path: 'activity',
                    select: 'title description image -_id'
                }).populate( {
                    path: 'provider',
                    select: 'name surname profile_pic -_id'
                })
                res.json({
                    response: allItineraries,
                    success
                })
            } catch (error) {
                success: false
                next(error)
            }
        }
    },

    getItineraryById: async (req, res, next) => {
        //console.log(req.params)
        const { id } = req.params
        let itinerary 
        let success = true
        try {
            itinerary = await Itinerary.findById(id).populate( {
                path: 'city',
                select: 'name'
            })
            res.json({
                response: itinerary,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }  
    },

    createItinerary: async (req, res, next) => {
        let city
        let itinerary
        let error = null
        let success = true
        try {
            if (req.body.city) {
                city = await City.findOne({ name: { $regex: req.body.city.trim(), $options: 'i' } })
                if (city) {
                    //console.log("City" + city)
                    const query = { ... req.body }
                    query.city = city._id
                    itinerary = await Itinerary.create(query)
                    res.json({
                        response: itinerary,
                        success
                    })
                }else {
                    res.json({
                        success: false,
                        error: 'The City is not registered'
                    })                    
                }
            }else {
                res.json({
                    success: false,
                    error: 'The Itinerary must have an associated City'
                })
            }
        } catch (err) {
            success: false
            next(err)
        }            
    },

    updateItinerary: async (req, res, next) => {
        let city
        let itinerary
        let success = true
        const { id } = req.params
        try {
            const query = { ... req.body }
            if (req.body.city) {
                city = await City.findOne({ name: { $regex: req.body.city.trim(), $options: 'i' } })
                if (!city) {
                    res.json({
                        success: false,
                        error: 'The City is not registered'
                    }) 
                }else{
                    query.city = city._id
                }
            }
            itinerary = await Itinerary.findOneAndUpdate({ _id: id}, query, { new: true }) 
            res.json({
                response: itinerary,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    },

    deleteItinerary: async (req, res, next) => {
        let itinerary
        let success = true
        const { id } = req.params
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id})  
            res.json({
                response: itinerary,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    },

}

export default itinerariesController;