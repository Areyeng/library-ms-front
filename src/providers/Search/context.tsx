import { createContext, ReactNode } from 'react';

export interface IBook {
  id?: string;
  title: string;
  author: string;
  description: string;
  publisher: string;
  isbn: number;
  image: string;
  genre: string;
  shelfNumber: number;
  like: number;
}

export interface ISearchState {
  title?: string;
  author?: string;
  isbn?: number;
}

export interface ISearchStateContext {
  SearchBookByTitle: IBook[];
  SearchBookByAuthor: IBook[];
  SearchBookByISBN: IBook[];
}

export const INITIAL_STATE: ISearchState = {
  title: '',
  author: '',
  isbn: 0,
};

export const SearchStateContext = createContext<ISearchStateContext>({
  SearchBookByTitle: [],
  SearchBookByAuthor: [],
  SearchBookByISBN: []
});

export const SearchActionContext = createContext<any>({});
