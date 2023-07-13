import express from "express";

const publicRouter = new express.Router();

publicRouter.get('/health', (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }
    res.status(200).send(data);
});

export{
    publicRouter
}