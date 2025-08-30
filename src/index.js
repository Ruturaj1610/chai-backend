import  dotenv  from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
});

connectDB();


// import express from "express";
// const app = express();

// (async ()=>{
//   try{
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Express error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });

//   }catch(error){
//     console.error("Database connection error:", error);
//     throw error;
//   }
// })()