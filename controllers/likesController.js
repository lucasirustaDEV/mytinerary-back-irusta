import Itinerary from "../models/Itinerary.js";
import User from "../models/User.js";

const likesController = {
    updateLikes: async (req, res, next) => {
        let user
        let itinerary
        let success = true
        try {


            if (req.body.likes) {
                const itineraryToLike = await Itinerary.findById(id)
                console.log(req.body.likes)
                console.log(itineraryToLike)
                const isLiked = itineraryToLike.likes.includes(req.body.likes)
                console.log(isLiked) 
                if (isLiked) {
                    console.log("Quitar")
                } else {
                    console.log("Agregar")
                }
            } 


            const query = { ... req.body }
            itinerary = await Itinerary.findOneAndUpdate({ _id: id}, query, { new: true })  
            res.json({
                response: itinerary,
                success
            }) 
        } catch (err) {
            success: false
            next(err)
        }
    }
}

export default likesController