const tasks = require("../Models/taskModel")

const routers = require("express").Router()

routers.post("/", async (req, res,next) => {
    try {
        const save = await tasks(req.body).save()
        res.status(200).json({messageCode:"success",data:save})
     }
    catch (e) {
        next(e)
     }
})

module.exports = routers