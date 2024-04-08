"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import bookrequestReducer from './reducer';
import { BookRequestActionContext, BookRequestStateContext, INITIAL_STATE } from './context';
import axios from 'axios';
import { BookRequestDetails } from './interface';
import { message } from 'antd';
import { getData, postData } from '@/utils/api';
import { access } from 'fs';

interface BookRequestProviderProps {
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

const BookRequestProvider: React.FC<BookRequestProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(bookrequestReducer, INITIAL_STATE);
    const token = localStorage.getItem('accessToken');
    const instance = getAxiosInstance(token);

    
    
    const RequestBook = async (bookDetails:BookRequestDetails) => {
        try {
            console.log('book details insides Requestbook',bookDetails)

           return  await postData('/BookRequestAppServices/CreateBookRequest',bookDetails).then((res) => {
                if (res) {


                    message.success("Created request successfully");
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("Book request unsuccessful");
        }
    }
    const GetAllRequests = async () => {
        try {

            return  await getData('/BookRequestAppServices/GetAllBookRequest').then((res) => {
                if (res) {
                    console.log('fetched requests: ',res)
                    dispatch({ type: "GetAllRequests", payload: res });
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
        <BookRequestStateContext.Provider value={state}>
            <BookRequestActionContext.Provider value={{ RequestBook,GetAllRequests }}>
                {children}
            </BookRequestActionContext.Provider>
        </BookRequestStateContext.Provider>
    );
}
const useBookRequestState = () => {
    const context = useContext(BookRequestStateContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};
const useBookRequestActions = () => {
    const context = useContext(BookRequestActionContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};

export { BookRequestProvider, useBookRequestState, useBookRequestActions };