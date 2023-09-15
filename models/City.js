import { Schema, model, Types } from "mongoose";

const collection = "cities"

const citySchema = Schema({
    name: { type: String, required: true},
    text: { type: String, required: true},
    image: { type: String, required: true},
    country: { type: Schema.Types.ObjectId, ref: 'countries', required: true },
}, {
    timestamps: true,
})

const City = model(collection, citySchema)

export default City

