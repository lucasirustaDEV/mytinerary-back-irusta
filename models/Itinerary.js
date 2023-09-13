import { Schema, model, Types } from "mongoose";

const collection = "itineraries"

const itinerarySchema = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'cities', required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    likes: { type: Number, required: true, default: 0 },
    provider: { type: String, required: true },
    profile_pic: { type: String, required: true },
    hashtag: [{ type: String }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'users' }]
}, {
    timestamps: true,
})

const Itinerary = model(collection, itinerarySchema)

export default Itinerary