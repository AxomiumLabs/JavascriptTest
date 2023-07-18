// console.log("hello")
require('dotenv').config()
var bodyParser = require('body-parser')
const express = require('express')
let myLogger=require('./middleware/logMiddleware.js')
let {connectDB}=require('./middleware/databaseMiddleware.js')
let userModal=require('./schema/userModel.js')
let mongoose=require("mongoose")

const app = express()
app.use(bodyParser.json())
// app.use(mongoCreation)

const mongodbURL = process.env.mongodbURL;
connectDB(mongodbURL).then(() => {
  console.log("string...");
});



let users=['anaina','afna','sachin']

app.get('/user-save', async function (req, res) {
  let {fullname,email,password}=req.query
  
  const saveUser = new userModal(
    {
        _id: new mongoose.Types.ObjectId(),
        fullname: fullname,
        email: email,
        password: password,
       
    });
    let newUser = await saveUser.save()
    res.send(`Hello world by anaina`)
    })

  app.get('/user',function(req,res){

      let {fullname,email,password}=req.query
      let values={
        _id: new mongoose.Types.ObjectId(),
        fullname,
        email,
        password,
       }
       userModal.create(values);
       res.send(`Successfully updated: ${JSON.stringify(values)}`)
    })
    

    app.post('/userMany',function(req,res){

      let values=req.body
      
       userModal.insertMany(values);
       res.send(`Successfully updated: ${values}`)
    })
       
    app.post('/userFetchall',async function(req,res){
      fetchAll=await userModal.find({})
      res.send(fetchAll)
    
    })   

    app.get('/userDelete',async function(req,res){
      let {fullname}=req.query
      // deleteOne=await userModal.deleteOne({ "fullname":'anaina'});
     userModal.deleteOne({ 
        fullname:fullname,
       }).then((result)=>{
        console.log(result)
        if(result.deletedCount == 0){
          return res.send("nothing to delete")
        }
        res.send("deleted successfully")

       }).catch(()=>{
        console.log("not found")
        res.send("unable to delete")
       });

     
    })
    
    
    app.get('/userFoundOne', function(req,res){
      let {fullname}=req.query
      // deleteOne=await userModal.deleteOne({ "fullname":'anaina'});
     userModal.findOne({ 
        fullname:fullname,
       }).then((result)=>{
        console.log(result)
        if(result){
          return res.send(result)
        }
        res.send("not found")

       }).catch(()=>{
        res.send("unable to found")
       });

     
    })   

    app.get('/userUpdate',async function(req,res){
      let {oldName,updatedName,UpdatedEmail}=req.query
      updateOne=await userModal.updateOne({  
        fullname:oldName},
        {fullname:updatedName,
          email:UpdatedEmail
      }).then((result)=>{
        console.log(result)
        res.send("updated")
      }).catch(()=>{
        res.send("unable to found")
       });
    })  



    app.get('/userUpdateMany',async function(req,res){
      let {oldName,updatedName}=req.query
      updateOne=await userModal.updateMany({  
        fullname:oldName},
        {fullname:updatedName
      }).then((result)=>{
        console.log(result)
        res.send("updated")
      }).catch(()=>{
        res.send("unable to found")
       });
    })  

  
 


app.listen(3000, () => {
  console.log("server started on 3000...")
});
