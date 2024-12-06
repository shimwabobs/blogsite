import Userscontroller from "../controllers/usercontroller.js";
import express from "express";
import authorize from "../middleware/authorize.js";


const router=express.Router();

router.post("/adduser",Userscontroller.registeruser);
router.post("/login",Userscontroller.login);
router.put("/updateuser/:userid",authenticate,Userscontroller.edituser);
router.delete("/deleteuser:userid",Userscontroller.deleteuser);

export default router;
