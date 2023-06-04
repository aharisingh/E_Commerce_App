import mongoose from "mongoose"
import app from "./app.js"
import config from "./config/index.js"
//create a method

//run this method

(async () => {
    try{
      await mongoose.connect(config.MONGODB_URL)
      console.log("DB Connected !")


      app.on("error",(err) => {
        console.error("Error : " , err);
        throw err
      })
      
      const onListening = () => {
        console.log("Listening on port 5000");
      }
      app.listen(config.PORT , onListening);

    }
    catch(err){
        console.log("Error  : " + err)
        throw err
    }
})()