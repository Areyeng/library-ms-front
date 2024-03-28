"use client";
import React, { FC,PropsWithChildren, useContext, useReducer } from 'react';
import  userReducer  from './reducer';
import {RegisterActionContext,RegisterStateContext,INITIAL_STATE } from './context'; 
import axios from 'axios';
import { message } from 'antd';
import {Register} from './interface';

interface RegisterProviderProps{
    children: React.ReactNode;
}
const RegisterProvider: React.FC<RegisterProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);

    const Register = async (register: Register)=>{
        try{
            
           await axios.post('https://localhost:44311/api/services/app/Member/CreateMember',register).then((resp)=>{
                if(resp.data){
                  message.success("registered succesfully");
                }else{


                }
            })
         }catch(error){
         console.log("Error");
         message.error("unsucessfull registration")
         }
       
    }
    return (
        <RegisterStateContext.Provider value={state}>
            <RegisterActionContext.Provider value={{ Register}}>
            {children}
            </RegisterActionContext.Provider>
        </RegisterStateContext.Provider>
    );
       


}
const useRegisterState = () => {
    const context = useContext(RegisterStateContext);
    if (!context) {
      throw new Error('useAuthState must be used within an AuthProvider');
    }
    return context;
  };
   
  const useRegisterActions = () => {
    const context = useContext(RegisterActionContext);
    if (!context) {
      throw new Error('useAuthActions must be used within an AuthProvider');
    }
    return context;
  };
   
  export { RegisterProvider,useRegisterState, useRegisterActions  };