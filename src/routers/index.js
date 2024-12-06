import express from "express"
import Blog from "./blog.js"
import User from "./user.js"


const api=express();

api.use(express.json());
api.use("/api/v1/blog",Blog);
//api.use("/v1/api/comment");
api.use("/api/v1/user",User);

api.get("/",(req,res)=>{
    res.status(200).send({message:"Welcome to the blog web"});
})

api.use("/",(req,res)=>{
    res.status(404).send({message:"Page not found"});
})

export default api;