import { createAction } from "redux-actions";

enum ActionTypes{
    GetAllUsers = "GetAllUsers",
    
}
export const getuserdetails = createAction(ActionTypes.GetAllUsers);
