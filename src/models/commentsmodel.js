import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Blogpost from "./blogpostmodel.js";
import Users from "./usersmodel.js";


const Comment= sequelize.define("comment",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    authorId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

Comment.belongsTo(Blogpost);
Blogpost.hasMany(Comment);
Users.hasMany(Comment);
Comment.belongsTo(Users);

export default Comment;
