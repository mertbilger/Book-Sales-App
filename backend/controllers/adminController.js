const Admin = require("../models/adminModel")
const jwt=require('jsonwebtoken')

const tokenOlustur=(_id)=>{

    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:'1h'})
    
}


const loginAdmin=async (req,res)=>{

    const {email,parola}=req.body;

    try {
        
        const admin=await Admin.login(email,parola)

        const token=tokenOlustur(admin._id)

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({hata:error.message})
    }
}

module.exports = { loginAdmin }    