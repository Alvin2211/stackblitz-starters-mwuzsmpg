import mongoose from "mongoose"

const hrsInHospitalsSchema = new mongoose.Schema({
  hours:{
    type:Number,
    required:true
  },
  hospital:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
})

const doctorSchema = new mongoose.Schema({ 
  name:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  yearsOfExperience:{
    type:Number,
    required:true,
    default:0,
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital",
    }
  ],
  noOfHoursWorked:[hrsInHospitalsSchema]
  
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)
