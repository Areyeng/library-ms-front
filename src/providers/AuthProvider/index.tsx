"use client";
import React, { FC,PropsWithChildren, useContext, useReducer } from 'react';
import  userReducer  from './reducer';
import {AuthActionContext,AuthStateContext,INITIAL_STATE } from './context'; 
import axios from 'axios';
import { Details } from './interface';
import { message } from 'antd';
import { useRouter } from 'next/navigation';


interface AuthProviderProps{
    children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);
    const {push} = useRouter();
   
    const login = async (details: Details)=>{
        try{
            const response = await axios.post('https://localhost:44311/api/TokenAuth/Authenticate',details,{
                headers: {
                    "Content-Type": "application/json-patch+json",
                  
                }
               
            })
          
            if(response.status==200){
                dispatch({type: "LogIn",payload:response.data.result.accessToken})
                localStorage.setItem('token',response.data.result.accessToken)
                localStorage.setItem('userID',response.data.result.userId)
                localStorage.setItem('email',details.userNameOrEmailAddress)
                push('/home');
            }
            else{
                message.error("Failed to log in");

            }

        }catch(error){
            console.log("Error");
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        dispatch({type: "LogOut"})
        if(localStorage.getItem('token') === null) {
            push('/login')
        }
        else
        {
          message.error('An error occurred while logging out');
        }
       
      };

      return (
        <AuthStateContext.Provider value={{ isAuthenticated: state.isAuthenticated, authToken: state.authToken }}>
            <AuthActionContext.Provider value={{ login, logout}}>
              {children}
            </AuthActionContext.Provider>
         </AuthStateContext.Provider>
      );


}
const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }
  return context;
};
 
const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error('useAuthActions must be used within an AuthProvider');
  }
  return context;
};
 
export { AuthProvider, useAuthState, useAuthActions, AuthStateContext };
 