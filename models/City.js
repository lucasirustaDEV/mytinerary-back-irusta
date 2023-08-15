import { Schema, model, Types } from "mongoose";

let collection = "cities"

let schema = new Schema({
    id: { type: String, required: true},
    name: { type: String, required: true},
    text: { type: String, required: true},
    image: { type: String, required: true},

}, {
    timestamps: true,
})

let City = model(collection, schema)

export default City

