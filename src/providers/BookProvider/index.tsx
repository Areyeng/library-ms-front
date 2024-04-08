"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import bookReducer from './reducer';
import { BookActionContext, BookStateContext, INITIAL_STATE } from './context';
import axios from 'axios';
import { BookDetails } from './interface';
import { message } from 'antd';
import { getData, postData } from '@/utils/api';
import { access } from 'fs';

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

const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);
    const token = localStorage.getItem('accessToken');
    const instance = getAxiosInstance(token);

    const AddBook = async (bookDetails: BookDetails) => {
        try {

            await postData('/Book/Create', bookDetails).then((resp) => {
                if (resp.data) {
                    message.success("Added book succesfully");
                } else {
                   

                }
            })
        } catch (error) {
            message.error("Book not added")
        }

    }
    const GetBook = async (bookId:any) => {
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
    
    const GetAllBooks = async () => {
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
            <BookActionContext.Provider value={{ AddBook,GetBook, GetAllBooks }}>
                {children}
            </BookActionContext.Provider>
        </BookStateContext.Provider>
    );
}
const useBookState = () => {
    const context = useContext(BookStateContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};
const useBookActions = () => {
    const context = useContext(BookActionContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};

export { BookProvider, useBookState, useBookActions };