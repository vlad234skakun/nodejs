import { Schema, model } from "mongoose";

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: String

}, {versionKey: false, timestamps:true })

const Publisher = model("publisher", publisherSchema)

export default Publisher; 