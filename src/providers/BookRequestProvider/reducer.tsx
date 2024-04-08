import { BookRequestState,BookRequestAction } from "./interface";

const currentDate = new Date();

// Add 14 days to the current date
const twoWeeksAhead = new Date(currentDate);
twoWeeksAhead.setDate(currentDate.getDate() + 14);
const bookrequestReducer = (state:BookRequestState, action: BookRequestAction): BookRequestState => {
    
    switch (action.type) {
      case 'RequestBook':
        return {
            bookRequestedId : '',
            requestorId :'',
            requestDate: currentDate ,
            returnDate : twoWeeksAhead ,
            collected : false,
            releasorId : ''
        };
        case 'GetAllRequests':
            return {
                bookRequestedId : '',
                requestorId :'',
                requestDate: currentDate ,
                returnDate : twoWeeksAhead ,
                collected : false,
                releasorId : ''
            };
      default:
        return state;
    }
  };
  export default bookrequestReducer;