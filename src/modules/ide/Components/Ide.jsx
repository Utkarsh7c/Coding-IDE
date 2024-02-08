import Button from '@mui/material/Button';
import Editor from '@monaco-editor/react';

import { useRef } from 'react';
import { apiClient } from '../../../shared/services/api-client';
export const Ide = () => {
            const editorRef= useRef(null)
const mount=(editor)=>{
editorRef.current=editor;

}
            const getcode= async()=>{
              const code = editorRef.current.getValue();
              console.log(code);
              const jsonObject={"code":code};
           try{
             const response= await apiClient.post(process.env.REACT_APP_CODE_URL   ,jsonObject);
           console.log("response is ",response);

            }
            catch(err){
              console.log(err);
            }

  }
    const SkeletonCode=` class solution
       { 
        public int show(int x, int y){  
          return x*y;
        }0
       } `
  return (
    <>
    <Editor
    onMount={mount}
    height="60vh"
    defaultLanguage="java"
    defaultValue={SkeletonCode}
  />
  <Button  onClick={getcode} variant="contained">Submit Code</Button>

 </>
  )
}
