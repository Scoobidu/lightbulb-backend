const mongoose = require('mongoose');


const userModel = mongoose.Schema({
   userId:{
      type:String,
      required:true
   },
   name:{
        type: String,
        required:true
     },
   email:{
        type:String,
        required: true
     },
   bio:{
        type: String,
     },
  
})

module.exports = mongoose.model("users", userModel);
