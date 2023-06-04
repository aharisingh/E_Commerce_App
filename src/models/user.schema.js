import mongoose from "mongoose"
import AuthRoles from "../utils/authRoles.js"

const {Schema} =  mongoose

const userSchema = new Schema({
    name : {
        type : String ,
        required : [true, "Name is Required"],
        maxLength : [30 , "Name must be less than 30 chars"]
    },
    email : {
        type : String ,
        required : [true, "Email is Required"],
    },
    password : {
        type : String ,
        required : [true , "Password is required"],
        minLength : [8 , "password must have atleast 8 chars"],
        select : false
    },
    role : {
        type : String,
        enum : Object.values(AuthRoles),
        default : AuthRoles.USER
    },
    forgotPasswordToken : String ,
    forgotPasswordExpiry : Date
},{timeStamps : true})

export default mongoose.model("User" , userSchema)