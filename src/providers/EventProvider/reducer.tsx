import { EventState,EventAction} from "./interface";

const eventReducer = (state:EventState, action: EventAction): EventState => {
   
    switch (action.type) {
      case 'AddEvent':
        return {
            name: '',
            description: '',
            eventDate: new Date,
            location: '',
        };
       
      default:
        return state;
    }
  };

export default eventReducer;