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
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxq1lP-3WfX0CFzcRFTDSSreYl9snnPr-oSQ&usqp=CAU'
    },
  },
  {
    // uesername, email, password, ocupation, date (joined)
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
