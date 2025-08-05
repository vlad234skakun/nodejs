import { Schema, model } from "mongoose";


const magazineSchema = new Schema({
    title: {
    type: String,
    required: true,
  },
  issueNumber: Number,
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
})

const Magazine = model("magazine", magazineSchema)

export default Magazine