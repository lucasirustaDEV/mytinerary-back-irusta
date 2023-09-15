import { Schema, model, Types } from "mongoose";

const collection = "activities"

const activitySchema = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true},
}, {
    timestamps: true,
})

const Activity = model(collection, activitySchema)

export default Activity