"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import bookReducer from './reducer';
import { BookActionsContext, BookStatesContext, INITIAL_STATE } from './context';
import axios from 'axios';
import { BookDetails } from './interface';
import { message } from 'antd';
import { getData, postData,deleteData, updateData } from '@/utils/api';
import { access } from 'fs';
import { BookActionContext, BookStateContext } from '../BookProviders/context';

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
    // const GetBook = async (bookId:any) => {
    //     try {
           
    //         return await getData(`/Book/Get?Id=${bookId}`).then((resp) => {
    //             console.log("response: ",resp)
    //             if (resp.data) {
    //                 dispatch({ type: "GetBook", payload: resp.data });
    //                 return resp;
    //             } else {
    //                 // Handle case when response data is empty
    //             }
    //         });
    //     } catch (error) {
    //         message.error("Book not fetched");
    //     }
    // }
    //search example
    const GetBook = async (bookId:any) => {
        try {
            return await getData(`/Book/Get?Id=${bookId}`).then((resp) => {
              if (resp) {
               
                return resp;

            } else {

                return []
            }
            })
            } catch (error) {
                console.log("Error");
                message.error("Book(s) not found")
            }  
       
    }

    //
    
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
    const DeleteBook = async (id:string) => {
        try {

           return  await deleteData(`/Book/Delete?Id=${id}`).then(() => {
                    message.success("Deleted")
            })

        } catch (error) {
            message.error("Book not deleted");
        }
    }

    const UpdateBook = async (newDetails: BookDetails) => {
        try {

           return  await updateData(`/Book/Update`,newDetails).then((res) => {
                if (res) {
                    console.log("Updating book with newDetails: ",newDetails)
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("Book not deleted");
        }
    }
    return (
        <BookStatesContext.Provider value={state}>
            <BookActionsContext.Provider value={{ AddBook,GetBook, GetAllBooks, DeleteBook}}>
                {children}
            </BookActionsContext.Provider>
        </BookStatesContext.Provider>
    );
}
const useBookState = () => {
    const context = useContext(BookStatesContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};
const useBookActions = () => {
    const context = useContext(BookActionsContext);
    if (!context) {
        throw new Error('useBookState must be used within an BookProvider');
    }
    return context;
};

export { BookProvider, useBookState, useBookActions };