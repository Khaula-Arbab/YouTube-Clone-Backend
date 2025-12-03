import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDB = async() => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI,{
       dbName : DB_Name
    })
    console.log(`🎉 MongoDB Atlas connected successfully!
      \n DB Host : ${connectionInstance.connection.host}`,
    )
  }
  catch
    (error)  {
      console.error("❌ MongoDB connection failed:");
      console.log(error);
      process.exit(1);

    }
  
}

export default connectDB;
