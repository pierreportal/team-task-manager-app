const mongoose = require("mongoose")
const { Schema } = mongoose

const answerSchema = new Schema({
  description: String,
  taskId: { type: Schema.Types.ObjectId, ref: "Task" },
  createdAt: Date,
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
})

const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer