import { createAction } from "redux-actions";

enum ActionTypes{
    AddEvent = "AddEvent",
     
}
export const addevent = createAction(ActionTypes.AddEvent);
