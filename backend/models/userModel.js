const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      require: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timeStamp: true }
);

const UserModel = mongoose.model("User", userModel);

module.exports = UserModel;
