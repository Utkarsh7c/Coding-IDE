const URL='mongodb+srv://admin:adminadmin@mycluster.i2naj2t.mongodb.net/userdb?retryWrites=true&w=majority';
import mongoose from "mongoose";
 const promise=mongoose.connect(URL);
 promise.then(data=>{
    console.log('db connected...');
 }).catch(err=>{
    console.log( 'error during db connection ',err);
 })
 export default mongoose;