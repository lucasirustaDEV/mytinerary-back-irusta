import cities from "../data/cities.js";
import City from '../models/City.js'

const citiesController = {
    getAllCities: async (req, res, next) => {
        let allCities 
        let error = null
        let success = true
        try {
            allCities = await City.find().sort({ name: 1 })
        } catch (err) {
            console.log(err)
            success = false
            error = err
        }
        res.json({
            response: allCities,
            success,
            error
        })
    },

    getOneCity: async (req, res, next) => {
        console.log(req.params)
        const { id } = req.params
        //const city = cities.find(city => city.name == name)
        let city 
        let error = null
        let success = true
        try {
            //city = await City.findOne({_id : id})
            //city = await City.find({_id : id})
            city = await City.findById(id)
        } catch (err) {
            console.log(err)
            success = false
            error = err
        }
        res.json({
            response: city,
            success,
            error
        })   
    },

    createOneCity: async (req, res, next) => {
        //res.send('Crear')
        let newCity;
        let error = null
        let success = true
        try {
            //const newCity = new City(req.body)
            //await newCity.save()

            newCity = await City.create(req.body)
            console.log(newCity)

        } catch (err) {
            console.log(err)
            success: false
            error: err
        }       
        res.json({
            response: newCity,
            success,
            error
        })     
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

    searchCity: async (req, res, next) => {
        let result
        let success = true
        const { term } = req.params
        try {
            result = await City.find({ name: { $regex: `^${term}`, $options: 'i' } })
            res.json({
                response: result,
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