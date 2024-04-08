import { createAction } from "redux-actions";

enum ActionTypes{
    RequestBook="RequestBook",
    GetAllRequests="GetAllRequests"   
}
export const requestbook = createAction(ActionTypes.RequestBook);
export const getallrequests = createAction(ActionTypes.GetAllRequests);
