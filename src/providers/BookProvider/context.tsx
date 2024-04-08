import { createContext } from 'react';
import { BookState, BookActions, GetAllBooks } from './interface';

export const INITIAL_STATE: BookState = {
    title : '',
    author : '',
    description : '',
    publisher : '',
    isbn : 0,
    image : '',
    genre : '',
    shelfNumber : 0,
    like : 0
}


export const BookStateContext = createContext<BookState>(INITIAL_STATE);
export const BookActionContext = createContext<BookActions>({
    AddBook: ()=>{},
    GetBook: async ()=> Promise<any>,
    GetAllBooks:async ()=> Promise<any>

})