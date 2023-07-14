import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();

publicRouter.get('/health', (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }
    res.status(200).send(data);
});

publicRouter.post('/api/users/register',userController.register)
publicRouter.post('/api/users/login',userController.login)

export{
    publicRouter
}