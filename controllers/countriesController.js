import Country from "../models/Country.js";

const countriesController = {
    getAllCountries: async (req, res, next) => {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: `^${name}`, $options: 'i' }
        }
        let allCountries
        let success = true
        try {
            allCountries = await Country.find(query).sort({ name: 1 })    
            res.json({
                response: allCountries,
                success,
            });
        } catch (err) {
            success; false
            next(err)
        }
    },

    createCountry: async (req, res, next) => {
        let newCountry;
        let success = true
        try {
            newCountry = await Country.create(req.body)
            res.json({
                response: newCountry,
                success,
            })  
        } catch (err) {
            success: false
            next(err)
        }          
    }
}

export default countriesController