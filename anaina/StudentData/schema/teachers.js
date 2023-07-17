const mongoose = require("mongoose");

// Create a schema
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        uppercase: true
      },
      subject:{
        type:[],
        required:true
      },
      joiningDate:{
        type:Date,
        required:true
      },
      socialMediaHandles: {
        type: Map,
        of: String,
      },
      Salary: {
        type: Number,
        default:20000,
      },
      password: {
        type: String,
        required: true,
        validate: {
          validator: (value)=> {
            return value.length >= 6;
          },
          
        }
      }
   
})

const teacherModal = mongoose.model("teachers", userSchema);

module.exports = teacherModal;
