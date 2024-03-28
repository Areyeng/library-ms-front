import { createContext } from 'react';
import { RegisterState, RegisterActions } from './interface';

export const INITIAL_STATE: RegisterState = {
    name:'',
    surname:'',
    emailAddress:'',
    phoneNumber:'',
    password:'',
    memberID: ''
}

export const RegisterStateContext = createContext<RegisterState>(INITIAL_STATE);
export const RegisterActionContext = createContext<RegisterActions>({
    Register: ()=>{},
    
})

