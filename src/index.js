// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "test"   // You can use any name you want
//     });

//     console.log("🎉 MongoDB Atlas connected successfully!");
//   } catch (error) {
//     console.log("❌ MongoDB connection failed:");
//     console.log(error.message);
//   }
// }

// connectDB();



import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
}
  
);
connectDB()
.then (()=>{
     const server = app.listen(process.env.PORT || 3000, () => {
        console.log(`🚀 Server is running on port ${process.env.PORT || 3000}`);
     })
     server.on("error", (error) => {
        console.error("Error occured in the server:", error);
    })  
})
.catch((error) => {
    console.error("Failed to connect to the database:", error); 
})