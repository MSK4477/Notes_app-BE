import {getUser, updateUser} from "../controllers/user_controllers.js";
import protect from "../Middlewares/auth_middleware.js";
import { Router } from "express";

const userRouter = Router()

userRouter.get("/", protect, getUser)

userRouter.post("/update", protect, updateUser)

export default userRouter