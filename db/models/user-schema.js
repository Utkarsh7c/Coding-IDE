import mongoose from '../connection.js';
import { SchemaTypes } from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
    'email':{type:SchemaTypes.String,required:true,unique:true},       
    'password': { type: SchemaTypes.String, required: true, minLength: 6, maxLength: 100 }
    ,
    'name':{type:SchemaTypes.String,reuired:true},
    'phone':{type:SchemaTypes.String} // without required doesnot require
});
 export const UserModel=mongoose.model('users',userSchema);
