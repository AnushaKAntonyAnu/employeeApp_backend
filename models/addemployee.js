const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id":{type:String,required:true},
        "name":{type:String,required:true},
        "job":{type:String,required:true},
        "salary":{type:String,required:true}
    }
)
let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}