const userModel = require("../model");
const bcrypt =  require('bcryptjs')

async function loginUser(req, res) {
  try {
    const {email,password} =req.body;
    
      const user =   await userModel.findOne({email:email})
      // console.log(user)
        if(user){
           
           if(bcrypt.compare(password,user.password)){
               res.send({message:"login sucess",data:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "login failed" });
  }
}

module.exports = loginUser;
