import { Schema, model, Types } from "mongoose";

const collection = "itineraries"

const itinerarySchema = Schema({
    description: { type: String, required: true},
    city: { type: Schema.Types.ObjectId, ref: 'cities', required: true },
    price: { type: Number, required: true},
    duration: { type: String, required: true},
    likes: { type: Number, required: true},
}, {
    timestamps: true,
})

const Itinerary = model(collection, itinerarySchema)

export default Itinerary