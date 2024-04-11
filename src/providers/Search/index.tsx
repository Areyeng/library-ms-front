"use client";
import React, { FC,PropsWithChildren, useContext, useReducer } from 'react';
import  userReducer  from './reducer';
import {SearchActionContext,SearchStateContext,INITIAL_STATE } from './context'; 
import axios from 'axios';
import { message } from 'antd';
import { getData, postData } from '@/utils/api';
import { useRouter } from 'next/navigation';
import searchReducer from './reducer';
import { searchByTitleAction } from './action';

interface SearchProviderProps{
    children: React.ReactNode;
}
const SearchProvider: React.FC<SearchProviderProps>=({ children })=>{
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);
    const states = useContext(SearchStateContext);
    const {push} = useRouter();
    const searchBookByTitle = async (title: string)=>{
        try {
            return await getData(`/CustomBookService/GetByBookByTitle?title=${title}`).then((resp)=>{
              if (resp) {
                console.log("search called and returned: ",resp);
                dispatch({ type: "SEARCHBYTITLE", payload: resp });
                console.log("state across all components: ",states);
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
    const searchBookByAuthor = async (author: string)=>{
      try {
          return await getData(`/CustomBookService/GetByBookByAuthor?author=${author}`).then((resp)=>{
            if (resp) {
              console.log("search called and returned: ",resp);
              dispatch({ type: "SEARCHBYAUTHOR", payload: resp });
              console.log("state across all components: ",states);
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
          const searchBookByISBN = async (isbn: number)=>{
            try {
                console.log('isbn: ',isbn);
                return await getData(`CustomBookService/GetByBookByISBN?isbn=${isbn}`).then((resp)=>{
                  if (resp) {
                    console.log("search called and returned: ",resp);
                    dispatch({ type: "SEARCHBYISBN", payload: resp });
                    console.log("state across all components: ",states);
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
    return (
        <SearchStateContext.Provider value={state}>
            <SearchActionContext.Provider value={{ searchBookByTitle,searchBookByAuthor,searchBookByISBN }}>
            {children}
            </SearchActionContext.Provider>
        </SearchStateContext.Provider>
    );
       


}
const useSearchState = () => {
    const context = useContext(SearchStateContext);
    if (!context) {
      throw new Error('useAuthState must be used within an AuthProvider');
    }
    return context;
  };
   
  const useSearchActions = () => {
    const context = useContext(SearchActionContext);
    if (!context) {
      throw new Error('useAuthActions must be used within an AuthProvider');
    }
    return context;
  };
   
  export { SearchProvider,useSearchState, useSearchActions  };