import express from "express";
import blogcontroller from "../controllers/blogcontroller.js";
//import Checkcred from "../middleware/authorize.js";

const router=express.Router();
router.post("/postblog",blogcontroller.blogpost);
router.get("/findbyid/:blogid",blogcontroller.getblogbyid);
router.get("/findbyuser/:userid",blogcontroller.getblogbyuser);
router.delete("/deletebyid/:userid",blogcontroller.deleteblog)


export default router;