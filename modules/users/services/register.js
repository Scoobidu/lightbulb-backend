const userModel = require("../model");
const bcrypt =  require('bcryptjs')

async function registerUser(req, res) {
  try {
    // const hashedPassword =await bcrypt.hash(req.body.password,10)
    const user =  new userModel(req.body);
    const newUser = await user.save();
    // console.log(newUser);

    return res.status(200).send({ code: 200, message: "user added",data:user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error adding the discussion" });
  }
}

module.exports = registerUser;
