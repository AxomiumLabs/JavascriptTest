const mongoose = require("mongoose");

// Create a schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
    
      },
      email: {
        type: String,
       
      },
     
      phoneNumber: {
        type: Number,
      
      },
   
})

const staffModal = mongoose.model("staffs", userSchema);

module.exports = staffModal;
