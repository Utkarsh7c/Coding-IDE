import bcrypt from'bcrypt';
export  const hashing={
    SALT:10,
    passwordHash(plainpwd){
    return  bcrypt.hashSync(plainpwd,this.SALT);
     } ,
matchpassword(plainpwd,dbpwd){
   return bcrypt.compareSync(plainpwd,dbpwd)
  } 
}