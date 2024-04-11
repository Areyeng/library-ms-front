"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import userReducer from './reducer';
import { INITIAL_STATE, UserActionContext, UserStateContext } from './context';
import axios from 'axios';
import { message } from 'antd';
import { getData, postData } from '@/utils/api';
import { access } from 'fs';

interface UserProviderProps {
    children: React.ReactNode;
}
export function getAxiosInstance (accessToken: string | null){
    const baseUrl=process.env.NEXT_PUBLIC_API_URL;
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      return instance;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const token = localStorage.getItem('accessToken');
    const instance = getAxiosInstance(token);

    const GetAllUsers = async () => {
        try {

            return  await getData('/Member/GetAllMembers').then((res) => {
                if (res) {
                
                    dispatch({ type: "GetAllUsers", payload: res });
                 
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("users not fetched");
        }
    }
    const GetUser = async (userID:any) => {
        try {

            return  await getData(`/${userID}`).then((res) => {
                if (res) {
                
                    dispatch({ type: "GetUser", payload: res });
                 
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("users not fetched");
        }
    }

   

    return (
        <UserStateContext.Provider value={state}>
            <UserActionContext.Provider value={{ GetAllUsers,GetUser }}>
                {children}
            </UserActionContext.Provider>
        </UserStateContext.Provider>
    );
}
const useUserState = () => {
    const context = useContext(UserStateContext);
    if (!context) {
        throw new Error('useUserState must be used within an UserProvider');
    }
    return context;
};
const useUserActions = () => {
    const context = useContext(UserActionContext);
    if (!context) {
        throw new Error('useUserState must be used within an UserProvider');
    }
    return context;
};

export { UserProvider, useUserState, useUserActions };