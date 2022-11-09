const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    ocupation: {
      type: String,
      required: false,
    },
    image: {
      type: String, 
      default: 'https://cdn.dribbble.com/users/1165166/screenshots/3394646/media/d7adc8caca2611cd33ea23061df411fc.png'
    },
  },
  {
    // uesername, email, password, ocupation, date (joined)
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
