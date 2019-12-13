import express from "express"
import mongoose from './Config/db'
let db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("runninnng database")
  // we're connected!
});

const app = express()
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("runninnng")
})
app.use(express.json())

app.use('/todo', require("./TODO/todo"))