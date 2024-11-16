const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "此欄位必填"]
    },
    password: {
      type: String,
      required: [true, "此欄位必填"]
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;