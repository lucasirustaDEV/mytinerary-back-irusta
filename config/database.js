import mongoose from "mongoose";

let uri_link = "mongodb+srv://lucasirusta:apmern08tn@cluster0.1n5pgta.mongodb.net/mytinerary"

mongoose.connect(uri_link)
    .then(() => console.log("Connection Sucess"))
    .catch(error => console.log(error))