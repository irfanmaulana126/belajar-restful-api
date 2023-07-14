import express from "express"
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";

const privateApi = express.Router();
privateApi.use(authMiddleware)

privateApi.get("/api/users",userController.get)
privateApi.get("/api/users/logout",userController.logout)

export{
    privateApi
}