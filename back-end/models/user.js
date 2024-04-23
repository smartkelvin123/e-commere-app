const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1024,
  },
  isAdmin: {
    type: Boolean,
    // required: true,
    default: false,
  },
});
module.exports = mongoose.model("User", userSchema);

// const User = mongoose.model("User", userSchema);

// module.exports = User;
