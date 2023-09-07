import { Schema, model, Types } from "mongoose";

const collection = "users"

const userSchema = Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    profile_pic: { type: String, default: "https://cdn.glitch.global/81b475d8-f616-4e33-9658-c8482b459606/user.png?v=1694018146204" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, ref: 'countries', required: true },
    birth_date: { type: Date },
    rol: [ { type: String }]
}, {
    timestamps: true,
})

const User = model(collection, userSchema)

export default User