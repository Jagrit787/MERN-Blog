import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) =>{
    const { username, email, password }=req.body;

    if(!username || !email || !password || username === ''|| email===''|| password=== ''){
        return res.status(400).json({message: 'All fields are required!'})
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
        res.status(500).json({message: error.message})
    }
    

    
}