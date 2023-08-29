import City from '../models/City.js'
import Itinerary from '../models/Itinerary.js'

const citiesController = {
    getAllCities: async (req, res, next) => {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: `^${name}`, $options: 'i' }
        }
        let allCities 
        let success = true
        try {
            allCities = await City.find(query).sort({ name: 1 })
            res.json({
                response: allCities,
                success
            })
        } catch (err) {
            success: false
            next(err)
        }
    },

    getOneCity: async (req, res, next) => {
        console.log(req.params)
        const { id } = req.params
        //const city = cities.find(city => city.name == name)
        let city 
        let success = true
        try {
            //city = await City.findOne({_id : id})
            //city = await City.find({_id : id})
            city = await City.findById(id)
            res.json({
                response: city,
                success
            })  
        } catch (err) {
            success: false
            next(err)
        } 
    },

    createOneCity: async (req, res, next) => {
        //res.send('Crear')
        let newCity;
        let success = true
        try {
            //const newCity = new City(req.body)
            //await newCity.save()
            newCity = await City.create(req.body)
            //console.log(newCity)
            res.json({
                response: newCity,
                success,
            })  
        } catch (err) {
            success: false
            next(err)
        }          
    },

    updateOneCity: async (req, res, next) => {
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

    deleteOneCity: async (req, res, next) => {
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

    getCitiesPage: async (req, res, next) => {
        let totalCities
        //let totalPages
        let pageCities
        let success = true
        let page = req.query.page
        let limit = req.query.limit
        //console.log("page:" + page + ", limit: " + limit)
        try {
            totalCities = await City.countDocuments()
            //totalPages = Math.ceil(totalCities / limit)
            //console.log("cities: " + totalCities + " pages: " + totalPages)
            if (page * limit > totalCities){
                page = 1
                limit = totalCities
                //console.log("new page: " + page + "and limit: " + limit)
            }
            pageCities = await City.find().sort({ name: 1 }).skip((page - 1) * limit).limit(limit) 
            res.json({
                response: pageCities,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    }
}

export default citiesController;