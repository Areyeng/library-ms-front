import { createContext } from 'react';
import { BookRequestState, BookRequestActions} from './interface';
import { current } from '@reduxjs/toolkit';

const currentDate = new Date();

// Add 14 days to the current date
const twoWeeksAhead = new Date(currentDate);
twoWeeksAhead.setDate(currentDate.getDate() + 14);
export const INITIAL_STATE: BookRequestState = {
    bookRequestedId : '',
    requestorId :'',
    requestDate: currentDate ,
    returnDate : twoWeeksAhead ,
    collected : false,
    releasorId : ''
}


export const BookRequestStateContext = createContext<BookRequestState>(INITIAL_STATE);
export const BookRequestActionContext = createContext<BookRequestActions>({
    RequestBook:()=>{}, 
    GetAllRequests:async ()=> Promise<any>
})