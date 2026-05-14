import userModel from "../models/userModel.js"
import bcypt from "bcrypt"
import validator from "validator"
import createToken from "../utils/createToken.js"


const loginUser = async (req, res) => {
    try {
        const {email,password}= req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch) {
            return res.status(400).json({success:false,message:"Invalid password"})
        }

        const token = createToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:24*60*60*1000
        })

        res.status(200).json({success:true,message:"Login successful"})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Server error"})
    }
}

const registerUser = async (req, res) => {

}

export { loginUser, registerUser }