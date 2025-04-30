import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    dep_name:{type: String, required:true},
    description: {type:String},
    createdAt: {type:Date, default: Date.now},
    upatedAt: {type: Date, default :Date.now}
})