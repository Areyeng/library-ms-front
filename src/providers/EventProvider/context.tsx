import { createContext } from 'react';
import { EventState, EventActions } from './interface';

export const INITIAL_STATE: EventState = {
    name: '',
    description: '',
    eventDate: new Date,
    location: '',
}


export const EventStateContext = createContext<EventState>(INITIAL_STATE);
export const EventActionContext = createContext<EventActions>({
    AddEvent: ()=>{},
})