import { createAction } from "redux-actions";

enum ActionTypes{
    AddBook = "AddBook",
    GetBook = "GetBook",
    GetAllBooks = "GetAllBooks"    
}
export const addbook = createAction(ActionTypes.AddBook);
export const getbook = createAction(ActionTypes.GetBook);
export const getallbooks = createAction(ActionTypes.GetAllBooks);