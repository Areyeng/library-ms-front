import { RegisterState,Action } from "./interface";

const userReducer = (state:RegisterState, action: Action): RegisterState => {
    console.log("action", action);
    console.log("state", state);
    switch (action.type) {
      case 'Register':
        return {
            name:'',
            surname:'',
            emailAddress:'',
            phoneNumber:'',
            password:'',// Use action.payload if provided, otherwise set to null
            memberID:''
        };
     
      default:
        return state;
    }
  };
 
  export default userReducer;