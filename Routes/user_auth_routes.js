import { Router } from "express";
import { register, forgotpassword, login, logout, resetpassword, verify} from "../controllers/user_auth_controllers.js";

const userAuthRouter = Router()
userAuthRouter.post("/login", login);
userAuthRouter.get("/logout", logout)
userAuthRouter.get("/verify", verify);
userAuthRouter.post("/forgotpassword", forgotpassword);
userAuthRouter.post("/resetpassword", resetpassword);

userAuthRouter.post("/register", register)

export default userAuthRouter