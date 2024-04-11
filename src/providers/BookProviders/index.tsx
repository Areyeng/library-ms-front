"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { getData, postData,deleteData, updateData } from '@/utils/api';
import { access } from 'fs';
import { BookActionContext, BookStateContext, IBook, INITIAL_STATE } from './context';
import bookReducer from './reducer';
import { updateBookAction } from './action';

interface BookProviderProps {
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

const BookProviders: React.FC<BookProviderProps> = ({ children }) => {

    const [state,dispatch] = useReducer(bookReducer,INITIAL_STATE);

    const addBook = async (bookDetails: IBook) => {
        try {
            
            await postData('/Book/Create', bookDetails).then((response) => {
               
                if (response.data) {//logged out statements not showing
                    dispatch(updateBookAction());
                    console.log("state after updating:",state);
                    message.success("Added book succesfully");
                    console.log("state after adding: ",state);
                } else {
                   

                }
            })
        } catch (error) {
            message.error("Book not added")
        }

    }

    const updateBook = async (newDetails: IBook) => {
        try {
            console.log("trying to update...")
            const response = await updateData(`/Book/Update`,newDetails).then((response) => {
                console.log("response: ",response?.data.success)
                if (response) {
                   dispatch(updateBookAction(response.data.result));
                   
                   message.success("Updated Successfully")

                } else {

                    return []
                }
            })
            
        } catch (error) {
            console.log("current state :",state)
            console.log("Error");
            message.error("Failed to update by providerss");
        }
    }
    const getBook = async (bookId:any) => {
        try {
           
            await getData(`/Book/Get/${bookId}`).then((resp) => {
                if (resp.data) {
                    dispatch({ type: "GetBook", payload: resp.data });
                    return resp.data;
                } else {
                    // Handle case when response data is empty
                }
            });
        } catch (error) {
            message.error("Book not fetched");
        }
    }
    
    const getAllBooks = async () => {
        try {

           return  await getData('/Book/GetAll').then((res) => {
                if (res) {
                    dispatch({ type: "GetAllBooks", payload: res });
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("Books not fetched");
        }
    }
    return (
        <BookStateContext.Provider value={state}>
            <BookActionContext.Provider value={{ updateBook,addBook,getAllBooks }}>
                {children}
            </BookActionContext.Provider>
        </BookStateContext.Provider>
    );
}
const useBookStates = () => {
    const context = useContext(BookStateContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};
const useBookAction = () => {
    const context = useContext(BookActionContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};

export { BookProviders, useBookStates, useBookAction };