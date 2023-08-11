import cities from "../data/cities.js";

const citiesController = {
    getAllCities: (request, response, next) => {
        response.json({
            response: cities,
            success: true,
            error: null
        })
    },

    getOneCity: (req, res, next) => {
        console.log(req.params)
        const { name } = req.params
        const city = cities.find(city => city.name == name)
        res.json({
            response: city,
            success: true,
            error: null
        })    
    }
}

export default citiesController;