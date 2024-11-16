const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "此欄位必填"]
    },
    id: {
      type: String,
      required: [true, "此欄位必填"]
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;