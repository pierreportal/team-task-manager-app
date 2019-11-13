const mongoose = require("mongoose")
const { Schema } = mongoose

const taskSchema = new Schema({
  title: String,
  description: String,
  createdAt: Date,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task