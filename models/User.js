const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true },
  firstname: String,
  lastname: String,
  password: { type: String, required: true },
  picture: String
})

const User = mongoose.model("User", userSchema)

module.exports = User