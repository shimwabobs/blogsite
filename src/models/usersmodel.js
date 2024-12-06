import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import bcrypt from "bcrypt";

const Users= sequelize.define("users",{
    userid:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        },
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{hooks:{
        beforeCreate:async(user)=>{
            user.password= await bcrypt.hash(user.password,10);
        }
}});

export default Users;
