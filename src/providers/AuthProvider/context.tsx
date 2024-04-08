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








