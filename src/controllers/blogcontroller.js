import Blogpost from "../models/blogpostmodel.js";

const blogcontroller={
    blogpost:async(req,res)=>{
        try{
            const {blogid,title,content,authorid}=req.body;
            const result= await Blogpost.create({blogid,title,content,authorid});
            res.status(201).send(result);
        }catch(error){
            res.status(500).send({message:"Unable to add user",error:error.message});
        }
    },
    getblogbyid:async(req,res)=>{
        try{
            const {id}=req.params;
            const result= await Blogpost.findOne({where:{blogid:id}});
            res.status(200).send(result);
        }
        catch(error){
            res.status(500).send({message:"Unable to update",error:error.message});
        }
    },
    getblogbyuser:async(req,res)=>{
        try{
            const {userid}=req.params;
            const result= await Blogpost.findAll({where:{userid:userid}});
            res.status(200).send(result);
        }
        catch(error){
            res.status(500).send({message:"Unable to find",error:error.message});
        }
    },
    deleteblog:async(req,res)=>{
        try{
            const {id}=req.params;
            const result = await Blogpost.destroy({where:{blogid:id}});
            res.status(200).send(result);
        }
        catch(error){
            res.status(500).send({message:"Unable to delete",error:error.message});
        }
    }


}

export default blogcontroller;
