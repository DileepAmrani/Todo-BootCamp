import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean
})



const addTodo = mongoose.model("todos", schema)
export default addTodo