import express from "express";
import api from "./routers/index.js";
import sequelize from "./db/db.js";


const syncDb=async()=>{
    try{
        await sequelize.sync({alter:true});
        console.log("Synced successful");
    }
    catch(error){
        console.log("Unable to sync");
    }
}

syncDb();

const app=express();
const port=4567;
app.use(express.json());
app.use("/",api);

app.listen(port,"localhost",()=>{
    console.log("Connected successful");
})

