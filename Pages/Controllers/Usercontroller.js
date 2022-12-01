const User = require('../Model/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()


function generateAccessToken(userdata) {
  return jwt.sign(userdata, process.env.TOKEN_SECRET, { expiresIn: '3600s' });
}
exports.registeruser = async(req,res)=>{

    try{
        const token = generateAccessToken({userdata:email})
        let payload= {
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        }
        let user = await User.findOne({ email:payload.email});
        if(user){
            return res.status(400).send("User already registered.");
        }
         user=await User.create({
            ...payload
        });
        res.status(200).json({
            status:true,
            data: user,
            token:token,
        })
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.login = async(req,res)=>{

    try{
        let password = req.body.password;
        let email = req.body.email;
        const token = generateAccessToken({userdata:email})

        let user= await User.findOne({email:email});
        if(user){
            bcrypt.compare(password,user.password,(err,data)=>{
                if(data){
                    res.status(200).json({
                      status:true,
                     data:'login success',
                     token:token,
                     })
                }
                else(err)=>{
                    res.status(500).json({
                      error: err,
                      status: false,
                   })
                }
            })
        }
    }
    catch(err){

        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })

    }
}
// exports.usercart = async(req,res)=>{
//     try
// }