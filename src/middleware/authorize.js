
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const authorize=async(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token= authHeader && authHeader.split(" ")[1];
    
    if(!token){
        res.status(403).send({message:"Token required"});
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            res.status(403).send({message:"Wrong token"});
        }
        req.user=user;
        next();
    })
    
}

export default authorize;