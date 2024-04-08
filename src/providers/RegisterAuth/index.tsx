"use client";
import React, { FC,PropsWithChildren, useContext, useReducer } from 'react';
import  userReducer  from './reducer';
import {RegisterActionContext,RegisterStateContext,INITIAL_STATE } from './context'; 
import axios from 'axios';
import { message } from 'antd';
import {Register} from './interface';
import { postData } from '@/utils/api';
import { useRouter } from 'next/navigation';

interface RegisterProviderProps{
    children: React.ReactNode;
}
const RegisterProvider: React.FC<RegisterProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);
    const {push} = useRouter();
    const Register = async (register: Register)=>{
        
            
           
              try {

                await postData('/Member/CreateMember',register).then((resp)=>{
                        console.log('registering...');
                        message.success("Added member succesfully");
                       
                        push('/home')
                    
                })
            } catch (error) {
                console.log("Error");
                message.error("Member not added")
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