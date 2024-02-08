import React from 'react'
import { Login } from '../Components/Login'
import { Register } from '../Components/Register'
import LoginRegisterPage from '../Components/LoginRegisterPage'
import { QuestionPage } from '../../ide/pages/QuestionPage'
export const UserPage = () => {
  return (
    <>
   {/* < typography> LOGIN </typography> */}
       {/* <Register />  */}
      {/* <Login/> */}
       <LoginRegisterPage/>
      <QuestionPage/>  
      </>

  )
}
