import { createAction } from "redux-actions";

enum ActionTypes{
    GetAllUsers = "GetAllUsers",
    GetUser = "GetUser"
}
export const getuserdetails = createAction(ActionTypes.GetAllUsers);
export const getuser = createAction(ActionTypes.GetUser);