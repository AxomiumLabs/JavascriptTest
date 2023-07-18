
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
// const testFunction=()=>{
//     console.log("testing")
// }  
module.exports=myLogger
// export default myLogger;