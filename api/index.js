import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";

//user modules 
import connectToDB from './config/connectToDB.js';
//routes
import userRoutes from './routes/user.js';
import expenseRoutes from './routes/expense.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
//app.use(cors());

//router
app.use('/api/user',userRoutes);
app.use('/api/expense',expenseRoutes);




app.listen(PORT,()=>{
    connectToDB();
    console.log("server is create : "+PORT);
})