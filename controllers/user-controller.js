// import { UserModel } from "../db/models/user-schema.js";

// export const useController = {   // response handling 
//      async login(request,response){
// //         const body=request.body();
// //    response.json({message :'login'});
//   const userinfo=request.body;
//   const doc= await UserModel.findOne({'email':userinfo.email}).exec();
//    console.log('doc is ',doc);
  
//   if(doc&&doc_id){
//     const plainpwd=userinfo.password;
//     const dbpwd=doc.password;
//     if(hashing.matchpassword(plainpwd,dbpwd)){
//         response.json({message:'welcome'+doc.name})
//     }

//     else{
//         response.json({message:'invalid userid or  password'})
//     }
// }
//     else{
//         response.json({message:'invalid userid or  password'})
//     }

//     },
//      async register(request,response){
//         const userinfo=request.body;
//         console.log(userinfo)
//         userinfo.password=hashing.passwordHash(userinfo.password);
       
       
//         const doc=await UserModel.create(userinfo);
//         try{
//         if(doc&&doc._id){
//             response.json({message :'register successfully'});

//          }
//          else{
//             response.json({message:'problem in register'})
//          }
//         } catch(err){
//             response.json({message:'prbl'})
//         }
//            },
//     profile(request,response){
//     const userName=request.params.userName;
//         response.json({message : userName+'profile'});
//     },
//     changePassword(request,response){
//         response.json({message :''});
//     }
// }
import { UserModel } from "../db/models/user-schema.js";
 import { hashing } from "../utils/encrypt.js";
export  const userController = {
    async login(request,response){
        const userInfo=request.body;
        const doc   =  await UserModel.findOne({'email':userInfo.email}).exec();
        console.log("hi")
        if(doc && doc._id){
                const plainpwd=userInfo.password;
                 const dbpwd=doc.password;
                 if(hashing.matchpassword(plainpwd,dbpwd)){
                     response.json({message:'welcome'+doc.name})
                 }
              
            
                 else{
                     response.json({message:'invalid userid or  password'})
                 }
             }
                 else{
                     response.json({message:'invalid userid or  password'})
                 }
        // console.log('Request Body is ',body );
        // if(userInfo.userid===userInfo.password){
        //     response.json({message:'Welcone'+ userInfo.userid});
        // }
        // else{
        //     response.json({message:'login failed : invalid userid or password'})

        // }
    }
    
    ,
     async register(request,response){
        const userInfo=request.body;    
     userInfo.password= hashing.passwordHash(userInfo.password);
        try{ 
        const doc= await UserModel.create(userInfo);
         
         if(doc && doc._id){
        response.json({message:'registered Successfully'})
    }else{
        response.json({message:'Problem in registration'})
    }
}
catch(err){
    console.log( 'register err',err);
    response.json({message:'Problem in registration'})

}
}
  
    ,
    profile(request,response){
        
        
        const username=request.params.username;
        console.log('all params',username);
        response.json({message:username+'Profile'})

    }
    ,
    changePassword(request,response){
        response.json({message:'changepassword'})
    }

}