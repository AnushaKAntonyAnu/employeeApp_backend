const express = require("express")
const mongoose = require("mongoose")
const cors= require("cors")
const {employeemodel}=require("./models/addemployee")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anusha:anusha13@cluster0.hyxpaoy.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
   employeemodel.find().then(
    (data)=>{
        res.json(data)
    }
   ).catch(
    (error)=>{
        res.json(error)
    }
   )
})
app.listen(8082,()=>{
    console.log("server started")
})