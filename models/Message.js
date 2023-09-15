import { Schema, model, Types } from "mongoose";

const collection = "messages"

const messageSchema = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    itinerary: { type: Schema.Types.ObjectId, ref: 'itineraries', required: true },
    message: { type: String, required: true },
    calification: { type: Number, required: true, default: 0 },
}, {
    timestamps: true,
})

const Message = model(collection, messageSchema)

export default Message