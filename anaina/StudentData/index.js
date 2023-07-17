// console.log("student data....")
require('dotenv').config()
let express=require('express')
let {connectDB}=require('./middlewareFunctions/databaseMiddleware')
let studentModal=require('./schema/StudentModel')
let teacherModal=require('./schema/teachers')
let staffModal=require('./schema/staffModel')
let mongoose=require("mongoose")



const app=express()

const mongodbURL = process.env.mongodbURL;
connectDB(mongodbURL).then(() => {
  console.log("started...");
});

app.get('/student-details', async function (req, res) {
    let {firstname,lastname,age,languageMark,mathsMark,scienceMark,comment,date}=req.query
    
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



app.get('/teacher-details', async function (req, res) {
  let {firstname,subject,githubUsername,twitterUsername,salary,password}=req.query
  
  const saveUser = new teacherModal(
    {
        _id: new mongoose.Types.ObjectId(),
        firstname:firstname ,
        subject:subject,
        joiningDate:Date.now(),
        socialMediaHandles: {
                              github: githubUsername,
                              twitter: twitterUsername,
                            },
        salary:salary,  
        password:password,                  
    });
    let newUser = await saveUser.save()
      res.send(`Successfully updated`)
})


// app.get('/staff-details', async function (req, res) {
  
  
//   staffModal.insertOne(
//     {
//         _id: new mongoose.Types.ObjectId(),
//         firstname:"Rajeev" ,
//         email:"rajeev@getMaxListeners.com",
//         phoneNumber:7995568237,                
//     });
//       res.send(`Successfully updated`)
// })
//...................................STUDENT DATA FETCHING..........................................................

// app.get('/student-fetch', (req,res) => {
 
//   studentModal.find({}).then((student) => {
//       res.send(student);


//   }); })
////////////////////////////////////////////////

//   app.get('/student-fetch', (req,res) => {
 
//     studentModal.find({firstname:"Anaina"}).then((student) => {
//         res.send(student);
  
  
//     }); })
  
//////////////////////////////////////////
app.get('/student-fetch', (req,res) => {
  let studentData=[]
 
  studentModal.find({}).then((student)=> {
          console.log("Database fetching:")
      
          student.map((d, k) => {
            studentData.push(d._id,d.firstname,d.lastname);
          })
          res.send(studentData)
         
    })
    .catch(error => {
        console.log(error);
    })
  });



//...................................TEACHER DATA FETCHING..........................................................

app.get('/teacher-fetch', (req,res) => {
  let teacherData=[]
 
  teacherModal.find({}).then((teacher)=> {
          console.log("Database fetching:")
          res.send(teacher)
         
    })
    .catch(error => {
        console.log(error);
    })
  });
  //.....................................................................................................................




// app.get('/',function(req,res){
//     res.send("Hello world!")
// })

app.listen(3000, () => {
    console.log("server started on 3000...")
  });
  