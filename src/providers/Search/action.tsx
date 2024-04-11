import { createAction } from "redux-actions";
import { IBook } from "./context";

export enum SearchActionEnum {
    searchBookByTitle = 'SEARCHBYTITLE',
    searchBookByAuthor = 'SEARCHBYAUTHOR',
    searchBookByISBN = 'SEARCHBYISBN',
}

export const searchByTitleAction = createAction<IBook[]>(SearchActionEnum.searchBookByTitle);
export const searchByAuthorAction = createAction<IBook[]>(SearchActionEnum.searchBookByAuthor);
export const searchByISBNAction = createAction<IBook[]>(SearchActionEnum.searchBookByISBN);