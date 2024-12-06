
import Users from "../models/usersmodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const secretkey=process.env.SECRET_KEY;

const Userscontroller={
    registeruser:async(req,res)=>{
        try{
            const {name,email,password}=req.body;
            const result= await Users.create({name,email,password});
            res.status(201).send(result);
        }catch(error){
            res.status(500).send({message:"Unable to add",error:error.message});
        }
    },
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const user= await Users.findOne({where:{email:email}});
            if(!user){
                return res.status(401).send({message:"User not found"});
            }
            const ispassvalid=await bcrypt.compare(password,user.password);
            if(!ispassvalid){
                return res.status(401).send({message:"Password is not valid"});
            }
            const token= jwt.sign({id:user.userid,email:user.email},secretkey,{expiresIn:"1hr"});
            res.status(200).send({message:"Login successful",token});
        }catch(error){
            return res.status(500).send({message:"Unable to login",error:error.message});
        }
    },
    edituser:async(req,res)=>{
        try{
            const {userid}=req.params;
            const {name,password}=req.body;
            const result= await Users.update({name:name,password:password},{where:{userid:userid}});
            res.status(200).send(result);
        }
        catch(error){
            res.status(500).send({message:"Unable to update",error:error.message});
        }
    },

    deleteuser:async(req,res)=>{
        try{
            const {userid}=req.params;
            const result= await Users.destroy({where:{userid:userid}});
            res.status(200).send(result);
        }catch(error){
            res.status(500).send({message:"Unable to delete",error:error.message});
        }
    }
    
}

export default Userscontroller;