import dotenv from "dotenv"
dotenv.config()
import express from "express";
const PORT=process.env.PORT;
const app=express();
import connectDB from "./db/connection.js"
import routes from "./routes/index.js";
//dbs
connectDB()

app.use("/",routes)



app.listen(PORT,(err)=>{
    if(err)throw err;
    else console.log(`server work on ${PORT}`)
})