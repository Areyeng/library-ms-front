import { BookState,BookAction, GetAllBooks } from "./interface";

const bookReducer = (state:BookState, action: BookAction): BookState => {
   
    switch (action.type) {
      case 'AddBook':
        return {
            title : '',
            author : '',
            description : '',
            publisher : '',
            isbn : 0,
            image : '',
            genre : '',
            shelfNumber : 0,
            like : 0
        };
        case 'GetBook':
          return {
            ...state,

          };
      default:
        return state;
    }
  };

export default bookReducer;