import { createAction } from "redux-actions";

enum ActionTypes{
    LogIn = "LogIn",
    LogOut ="LogOut"
}


export const logout = createAction(ActionTypes.LogOut);
export const login = createAction(ActionTypes.LogIn);