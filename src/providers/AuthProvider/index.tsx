"use client";
import React, { FC,PropsWithChildren, useContext, useReducer } from 'react';
import  userReducer  from './reducer';
import {AuthActionContext,AuthStateContext,INITIAL_STATE } from './context'; 
import axios from 'axios';
import { Details } from './interface';
import { message } from 'antd';

interface AuthProviderProps{
    children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps>=({ children })=>{
    const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);

    const login = async (details: Details)=>{
        try{
            const response = await axios.post('https://localhost:44311/api/TokenAuth/Authenticate',details,{
                headers: {
                    "Content-Type": "application/json-patch+json",
                    'Origin': 'http://localhost:3000'
                }
               
            })
            console.log("response: ",response);
            if(response.status==200){
                dispatch({type: "LogIn",payload:response.data.result.accessToken})
                console.log("state: ",state);
                localStorage.setItem("token",response.data.result.accessToken)
                message.success("Successfully logged in");
                //push(/landing);
            }
            else{
                message.error("Failed to log in");

            }

        }catch(error){
            console.log("Error");
        }
    }
    const logout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('authToken');
        if(localStorage.getItem('authToken') === null) {
        message.success('Logout successful');
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
 
export { AuthProvider, useAuthState, useAuthActions };
 