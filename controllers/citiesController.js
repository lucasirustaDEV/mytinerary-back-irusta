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
        
    
    }
}

export default citiesController;