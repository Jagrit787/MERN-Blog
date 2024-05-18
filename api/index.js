import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
const uri= process.env.MONGO

mongoose
    .connect(uri)
    .then(()=>{
        console.log('MongoDB is connected!')
    })
    .catch((err)=>{
        console.log(err)
    });
    
const app = express();

//to allow json to be passed as input especially in insomnia and postman to test the APIs, we do:
app.use(express.json());

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
});