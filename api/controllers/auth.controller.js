import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

//we catch next for the middleware
export const signup = async(req, res, next) =>{
    const { username, email, password }=req.body;

    if(!username || !email || !password || username === ''|| email===''|| password=== ''){
       next(errorHandler(400, 'All fields are required!'))
    }
    //hash the password
    const hashedPassword= bcryptjs.hashSync(password, 10)

    //creating a new user from the schema in models. Also if key-value pair values are same, with ES-6 we can just write one like this: 

    const newUser = new User({
        username,
        password: hashedPassword,
        email,
    })

    //now we save them in DB
    try {
        await newUser.save()
        res.json({message: 'signup successful'})
    } catch (error) {
        next(error);
    }
    

    
}