let mongoose=require("mongoose")
// create an schema
const userSchema = new mongoose.Schema({
    fullname:{
        type :String,
        
    },
    email:{
        type :String,
        
    },
    password:{
        type :String,
       
    },
    
   
})
const userModal = mongoose.model('users' , userSchema)
module.exports= userModal