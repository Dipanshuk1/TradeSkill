import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app=express();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/",(req,res)=>{
    res.send("this is root");
})

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})