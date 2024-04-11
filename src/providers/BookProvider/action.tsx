import { createAction } from "redux-actions";

enum ActionTypes{
    AddBook = "AddBook",
    GetBook = "GetBook",
    GetAllBooks = "GetAllBooks",
    DeleteBook = "DeleteBook",   
    UpdateBook ="UpdateBook" 
}
export const addbook = createAction(ActionTypes.AddBook);
export const getbook = createAction(ActionTypes.GetBook);
export const getallbooks = createAction(ActionTypes.GetAllBooks);
export const deletebook = createAction(ActionTypes.DeleteBook);
export const updatebook = createAction(ActionTypes.UpdateBook);