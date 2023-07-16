// console.log("student data....")
require('dotenv').config()
let express=require('express')
let {connectDB}=require('./middlewareFunctions/databaseMiddleware')
let studentModal=require('./schema/StudentModel')
let mongoose=require("mongoose")



const app=express()

const mongodbURL = process.env.mongodbURL;
connectDB(mongodbURL).then(() => {
  console.log("started...");
});

app.get('/student-details', async function (req, res) {
    let {firstname,lastname,age,languageMark,mathsMark,scienceMark}=req.query
    
    const saveUser = new studentModal(
      {
          _id: new mongoose.Types.ObjectId(),
          firstname: firstname,
          lastname:lastname,
          age:age,
          languageMark:languageMark,
          mathsMark:mathsMark,
          scienceMark:scienceMark,
          totalMark:parseInt(languageMark)+parseInt(mathsMark)+parseInt(scienceMark)
  
      });
      let newUser = await saveUser.save()
        res.send(`Successfully updated`)
})

// app.get('/',function(req,res){
//     res.send("Hello world!")
// })

app.listen(3000, () => {
    console.log("server started on 3000...")
  });
  