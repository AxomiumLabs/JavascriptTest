const mongoose = require("mongoose");

// Create a schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      languageMark: {
        type: Number,
        required: true,
      },
      mathsMark: {
        type: Number,
        required: true,
      },
      scienceMark: {
        type: Number,
        required: true,
      },
      totalMark: {
        type: Number,
        required: true,
      },
   
})

const studentModal = mongoose.model("students", userSchema);

module.exports = studentModal;
