import mongoose from "mongoose"

const {Schema} = mongoose;

const productSchema =  new Schema({
    name : {
        type : String ,
        required : [true, "Product name is Required"],
        trim  :  true,
        maxLength : [120 , "Product name should not be max than 120 chars"]
      
    },
    price : {
        type : Number ,
        required : [true, "Product price is Required"],
        maxLength : [5 , "Product price should not be max than 5 chars"]
      
    },
    description : {
        type :  String
    },
    photos : [{
        secure_url : {
            type : String,
            required : true
        }
    }],
    stock : {
        type : Number,
        default : 0
    },
    sold : {
        type : Number,
        default : 0
    },
    collectionId : {
        ref : "Collection"
    }
},{timestamps :  true})

export default mongoose.model("Product",productSchema)
