import express,{Request,Response} from "express";
const routes:express.Router = express.Router();
import TODO from '../Config/Model/schema'

routes.get("/getTodos", async (req, res)=>{
    const todo = await TODO.find();
    res.send({
        message: todo
    })
})


routes.post("/addTodo", (req:Request, res:Response)=>{
    const addTodo = new TODO(req.body)
    addTodo.save()
    .then(()=>{
        res.send({
            message: "Sent Successfully"
        })
    })
    .catch((error)=>{
        res.send({
            message: error 
        })
    })
})


routes.delete('/delete:id', async(req: Request, res: Response)=>{
    await TODO.findOneAndDelete({_id:req.body.id})
    .then(()=>{
        res.send({
            message: "Delete Successfully !"
        })
    })
    .catch((error)=>{
        res.send({
            message: error 
        })
    })
})



routes.put("/update:id", async(req: Request, res: Response)=>{
    console.log(req.body.title)
    const check = await TODO.findByIdAndUpdate({_id:req.body._id},{title:req.body.newTitle})
    .then(()=>{
        res.send({
            message: "Todo updated!" 
        })
    })
    .catch((error)=>{
        res.send({
            message: error 
        })
    })
})

module.exports = routes

