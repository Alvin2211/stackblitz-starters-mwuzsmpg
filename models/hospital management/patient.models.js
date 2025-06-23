import mongoose from "mongoose"

const PatientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"],
    required:true
  },
  bloodgroup:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  diagnosedWith:{
    type:String,
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  

},{timestamps:true})

export const Patient = mongoose.model("Patient",PatientSchema)
