import { Schema, model, Types } from "mongoose";

const collection = "countries"

const countrySchema = Schema({
    name: { type: String, required: true},
    flag: { type: String, required: true},
    language: { type: String, required: true},
    currency: { type: String, required: true},
}, {
    timestamps: true,
})

const Country = model(collection, countrySchema)

export default Country