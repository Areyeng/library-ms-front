import { createAction } from "redux-actions";
import { IBook, IBookStateContext } from "./context";

export enum BookActionEnum{ 
    addBook = "ADDBOOK",
    updateBook ="UPDATEBOOK" 
}

export const updateBookAction = createAction<IBookStateContext,IBook>(BookActionEnum.updateBook,(UpdateBook)=>({UpdateBook}));
export const addBookAction = createAction<IBookStateContext,IBook>(BookActionEnum.addBook,(AddBook)=>({AddBook}));