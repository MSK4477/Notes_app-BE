import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./Database/connect_to_db.js";
import userAuthRouter from "./Routes/user_auth_routes.js";
import userRouter from "./Routes/user_routes.js";
import notesRouter from "./Routes/notes_routes.js";
dotenv.config();
const app = express()

app.get("/", (req, res) => { 
    res.status(200).json({messaeg:"app Succesfully Launched"})
})
await connectDb ()
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "https://chimerical-pavlova-f3ee47.netlify.app/",
      credentials: true,
    })
  );

app.use("/user", userAuthRouter)
app.use("/user", userRouter)
app.use("/notes", notesRouter)
const PORT = 4000;
app.listen(PORT, () => console.log("App Listening On port", PORT))