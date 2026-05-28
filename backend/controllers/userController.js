import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import validator from "validator"
import createToken from "../utils/createToken.js"
import fs from "fs"
import InterviewModel from "../models/interviewModel.js"
import { resetToken} from "../utils/resetToken.js"
import jwt from "jsonwebtoken"
import transporter from "../config/nodemailer.js"

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
    try {
        const {name,email,password}= req.body

        const exists = await userModel.findOne({email})

        if(exists){
            return res.status(400).json({success:false,message:"User already exists"})}


        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:"Invalid email"})
        }

        if(!validator.isStrongPassword(password)){
            return res.status(400).json({success:false,message:"Password is not strong enough"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:24*60*60*1000
        })

        res.status(200).json({success:true,message:"Registration successful"})

    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        })
    }
}

const logoutUser = async (req,res)=>{
    res.clearCookie("token")
    res.status(200).json({success:true,message:"Logout successful"})
}

const getCurrentUser = async (req,res)=>{
    try {
        const user = await userModel.findById(req.userId).select("-password")
        res.status(200).json({success:true,user})
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Server error"})
    }
}

const updateUser = async (req,res)=>{
    try {
        const image = req.file
        const { removeProfile,name,bio,experienceLevel } = req.body;
        const updatedData = {name,bio,experienceLevel}

        const existingUser = await userModel.findById(req.userId)

        if(removeProfile==="true"){
            if(existingUser.profileImage){
                fs.unlink(existingUser.profileImage,(err)=>{
                    if(err){
                        console.log(err)
                    }
                })
            }
            updatedData.profileImage = ""
        }

        else if(image){
            if(existingUser.profileImage){
                fs.unlink(existingUser.profileImage, (err) => {
                    if(err){
                        console.log(err);
                    }
                });
            }
            updatedData.profileImage = image.path
        }

        const user = await userModel.findByIdAndUpdate(req.userId,updatedData,{new:true}).select("-password")
        res.status(200).json({success:true,user})
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

const updatePassword = async (req,res)=>{
    try {
        const {currentPassword,newPassword}= req.body
        const user = await userModel.findById(req.userId)

        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }

        const isMatch = await bcrypt.compare(currentPassword,user.password)

        if(!isMatch) {
            return res.status(401).json({success:false,message:"Original password is incorrect"})
        }

        if(currentPassword === newPassword){
            return res.status(400).json({
                success:false,
                message:"New password must be different"
            })
        }

        if(!validator.isStrongPassword(newPassword)){
            return res.status(400).json({success:false,message:"Password is not strong enough"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword,salt)

        const updatedUser = await userModel.findByIdAndUpdate(req.userId,{password:hashedPassword},{new:true}).select("-password")

        res.status(200).json({success:true,user:updatedUser})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

const deleteUser = async (req,res)=>{
    try {
        const existingUser = await userModel.findById(req.userId);
        if(!existingUser){
            return res.status(404).json({success:false,message:"User not found"});
        }
        // delete profile image
        if(existingUser.profileImage){
            fs.unlink(existingUser.profileImage, (err) => {
                if(err){
                    console.log(err);
                }
            });
        }

        await InterviewModel.deleteMany({userId: req.userId})
        await userModel.findByIdAndDelete(req.userId)
        res.status(200).json({success:true,message:"User deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

const forgetPassword = async (req,res)=>{
    try {
        const {email}= req.body

        if(!email) {
            return res.status(400).json({success:false,message:"Email is required"})
        }

        const user = await userModel.findOne({email})

        if(!user) {
            return res.status(400).json({success:false,message:"User not found"})
        }

        const newToken = resetToken(user._id)

        const resetUrl = `http://localhost:5173/reset-password/${newToken}`
        
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Reset Password",
            html:`
                <h2>Reset Password</h2>

                <p>Click the link below to reset your password:</p>

                <a href="${resetUrl}">
                    Reset Password
                </a>
            `
        })
        return res.status(200).json({success:true,message:"Reset link sent to your email"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

const resetPassword = async (req,res)=>{
    try {
        const {token}= req.params
        const {password}= req.body

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }

        if(!validator.isStrongPassword(password)){
            return res.status(400).json({success:false,message:"Password is not strong enough"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        user.password = hashedPassword

        await user.save()
        res.status(200).json({success:true,message:"Password reset successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

export { loginUser, registerUser, logoutUser, getCurrentUser, updateUser, updatePassword, deleteUser,forgetPassword,resetPassword }