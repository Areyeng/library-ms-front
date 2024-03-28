import { createContext } from 'react';
import { AuthState, AuthActions } from './interface';

export const INITIAL_STATE: AuthState = {
    isAuthenticated: false,
    authToken: null,

}

export const AuthStateContext = createContext<AuthState>(INITIAL_STATE);
export const AuthActionContext = createContext<AuthActions>({
    login: ()=>{},
    logout: ()=>{}
})








// export interface IUser {
//     Name: string,
//     Surname: string,
//     Age: number,
//     Email: string,
//     Password: string
//     //add the User properties
// }

// export interface IUserStateContext{
//     readonly UserCreated?: IUser;
// }


// export interface IUserActionContext{
//     createUser?:(payload: IUser) =>void;
// }

// const UserContext = createContext({});

// export { UserContext };