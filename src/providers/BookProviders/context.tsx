import { createContext } from "react";

export interface IBook{
    id?:string;
    title : string,
    author : string,
    description : string,
    publisher : string,
    isbn : number,
    image : string,
    genre : string,
    shelfNumber : number,
    like : number
}

export const INITIAL_STATE: IBookStateContext={};

export interface IBookStateContext{
    readonly UpdateBook?:IBook;
    readonly AddBook?:IBook;
    readonly GetAllBooks:IBook;
}
export interface IBookActionContext{
    updateBook?:(payload: IBook)=>void;
    addBook: (payload: IBook)=>void;
    getAllBooks:{};
}

export const BookStateContext = createContext<IBookStateContext>(INITIAL_STATE);
export const BookActionContext = createContext<IBookActionContext>({});

