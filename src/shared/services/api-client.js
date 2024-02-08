// network call (http/https)
import axios from 'axios';
// http call(http methods)
// Get-read
//post- write(insert/create)
// put-update
//delete-remove
// crud operation
export const apiClient={ // fetch only works on browser // or networkOperation
    get(){

    },
    post(URL,data){
        try{ 
        const response=axios.post(URL,data)
    return response;

    }
    catch(err){
        throw err;
    }
},
put(){
    
}

}
//  donot provide spacing in env (url )









