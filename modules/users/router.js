const express = require('express');
const router = express.Router();


const  saveUser = require('./services/register')
const getUserById = require('./services/getById')
const getAllUser = require('./services/getAll')
const loginUser = require('./services/login')
const updatedbio = require('./services/updateBio')

router.post("/register", async (req, res) => {
    await saveUser(req, res);
  });


router.get('/',async (req,res)=>{
     await getUserById(req,res)
})  

router.get('/get-all',async (req,res)=>{
    await getAllUser(req,res)
})  

router.post("/login", async (req, res) => {
    await loginUser(req, res);
  });


router.put('/update',async (req,res)=>{
  await updatedbio(req,res)
})


module.exports = router;