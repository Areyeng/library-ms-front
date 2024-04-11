import { createContext } from 'react';
import { UserState, UserActions} from './interface';
import { current } from '@reduxjs/toolkit';


export const INITIAL_STATE: UserState = {
    name: '',
    surname: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    memberID: ''
}


export const UserStateContext = createContext<UserState>(INITIAL_STATE);
export const UserActionContext = createContext<UserActions>({
    GetAllUsers:async ()=> Promise<any>,
    GetUser:async ()=> Promise<any>
})