import { DataTypes } from "sequelize";
import Users from "./usersmodel.js";
import sequelize from "../db/db.js";

const Blogpost= sequelize.define("blogs",{
    blogid:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    authorid:{
        type:DataTypes.INTEGER
    }
});

Users.hasMany(Blogpost);
Blogpost.belongsTo(Users);

export default Blogpost;
