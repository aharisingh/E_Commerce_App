import mongoose from "mongoose"
import AuthRoles from "../utils/authRoles.js"
import bcrypt from "bcryptjs"

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

//encrypt the password before storing it in db

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next()
   this.password =  await bcrypt.hash(this.password , 10)
   next()
})

userSchema.methods = {
    //compare password
    comparePassword : async function(enteredPassword){
        return await bcrypt.hash(enteredPassword , this.password)
    }
}

export default mongoose.model("User" , userSchema)