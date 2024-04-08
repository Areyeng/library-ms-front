import { UserState,UserAction } from "./interface";

const userReducer = (state:UserState, action: UserAction): UserState => {
 
    switch (action.type) {
      case 'GetAllUsers':
        return {
            name: '',
            surname: '',
            emailAddress: '',
            phoneNumber: '',
            password: '',
            memberID: ''
        };
     
      default:
        return state;
    }
  };

export default userReducer;