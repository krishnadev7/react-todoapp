const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://krishnadev:85E7bUjVd9d2rdp1@cluster0.h7mht3x.mongodb.net/todo"
);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = { todo };
