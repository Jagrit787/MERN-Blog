import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import commentRoutes from "./routes/comment.route.js";
import path from "path";

dotenv.config();
const uri = process.env.MONGO;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve()

const app = express();
app.use(express.json({ limit: '10mb' })); // Adjust the size as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// middleware to enable CORS
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,

// }))

//middleware to allow json to be passed as input especially in insomnia and postman to test the APIs, we do:
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

//middleware to handle all errors
app.use((err, req, res, next) => {
  //if no statuscode then send 500 as default
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
