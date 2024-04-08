import { createAction } from 'redux-actions';


enum ActionTypes{
    Register = "Register"
}


export const Register = createAction(ActionTypes.Register);
