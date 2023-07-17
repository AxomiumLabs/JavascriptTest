const mongoose = require("mongoose");

// Create a schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
     
      phoneNumber: {
        type: Number,
        required: true,
      },
   
})

const staffModal = mongoose.model("staffs", userSchema);

module.exports = staffModal;
