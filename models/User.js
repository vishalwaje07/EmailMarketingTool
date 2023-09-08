const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, defalut: 0 },
});

mongoose.model("users", userSchema);
