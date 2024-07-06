const tasks = require("../Models/taskModel")

const routers = require("express").Router()

// post task
routers.post("/", async (req, res,next) => {
    try {
        const save = await tasks(req.body).save();
        res.status(200).json({messageCode:"success",data:save})
     }
    catch (e) {
        next(e)
     }
})

routers.get("/", async (req, res, next) => {
    try {
        const result = await tasks.find({})
        res.status(200).json({messageCode:"success",data:result})
     }
    catch (e) {
        next(e)
     }
})

routers.get("/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await tasks.findById({_id:id})
        res.status(200).json({messageCode:"success",data:result})
     }
    catch (e) {
        next(e)
     }
})

routers.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const {status,...rest} = req.body;
        const result = await tasks.findByIdAndUpdate({_id:id},{...rest},{new:true})
        res.status(200).json({messageCode:"success",data:result})
     }
    catch (e) {
        next(e)
     }
})

routers.put("/change-status/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const {status,...rest} = req.body;
        const result = await tasks.findByIdAndUpdate({_id:id},{status},{new:true})
        res.status(200).json({messageCode:"success",data:result})
     }
    catch (e) {
        next(e)
     }
})

routers.delete("/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        await tasks.findByIdAndDelete({_id:id})
        res.status(200).json({messageCode:"success"})
     }
    catch (e) {
        next(e)
     }
})

module.exports = routers