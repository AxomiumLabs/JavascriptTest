
let mongoose=require("mongoose")
const connectDB = async (mongoDBURL) => {
  try {
    const conn = await mongoose.connect(mongoDBURL);
    console.log(`MongoDB Connected.....`);
  } catch (error) {
    console.log(error);
  }
};
module.exports= {connectDB}