import mongoose from "mongoose";

const {Schema} = mongoose;

const collectionSchema =  new Schema(
    {
        name : {
            type : String ,
            required : [true, "Please provide a collection name"],
            trim : true,
            maxLength : [
                120 ,
                "Collection name Should not be more than 120 chars"
            ]
        }
    },
    {
        timestamps : true
    }
)

export default mongoose.model("Collection" , collectionSchema)
