import { AuthState,Action } from "./interface";

const userReducer = (state: AuthState, action: Action): AuthState => {
    console.log("action", action);
    console.log("state", state);
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          authToken: action.payload || null,// Use action.payload if provided, otherwise set to null
        };
      case 'LOGOUT':
        return {
          isAuthenticated: false,
          authToken: null,
        };
     
      default:
        return state;
    }
  };
 
  export default userReducer;


