import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//TODO: the signup function
//we catch next for the middleware
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }
  //hash the password
  const saltRounds = 10;
  //remember this await before bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  //creating a new user from the schema in models. Also if key-value pair values are same, with ES-6 we can just write one like this:

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  });

  //now we save them in DB
  try {
    await newUser.save();
    res.json({ message: "signup successful" });
  } catch (error) {
    next(error);
  }
};

//TODO: the signin function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required!"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password!"));
    }

    //if everything is correct
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};


//TODO: the google function
export const google = async (req, res, net) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      const { password: pass, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
    else{
      //TODO: If the user doesnt exist, we create a new user by generating a random password, hashing it and adding a new user 
      //ToString(36) contains all A-Z and 0-9
      const generatedPassword = Math.random().toString(36).slice(-8)+ Math.random().toString(36).slice(-8);
      const hashedPassword= bcrypt.hashSync(generatedPassword,10);
      const newUser= new User({
      username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
      email: email,
      password:  hashedPassword,
      profilePicture: googlePhotoUrl,
      })
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      const { password: pass,...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);

    }
  } catch (error) {
    next(error);
  }
};
