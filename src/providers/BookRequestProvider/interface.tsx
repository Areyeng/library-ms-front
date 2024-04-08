export interface BookRequestState{
    bookRequestedId : string,
    requestorId : string,
    requestDate: Date,
    returnDate : Date,
    collected : boolean,
    releasorId : string
}
export interface BookRequestActions{
    RequestBook: (bookDetails:BookRequestDetails)=> void
    GetAllRequests:()=> Promise<any>
}
export interface BookRequestDetails{
    bookRequestedId : string,
    requestorId : string,
    requestDate: Date,
    returnDate : Date,
    collected : boolean,
    releasorId : string
}
export interface BookRequestAction{
    type: string,
    payload?: {
        bookRequestedId : string,
        requestorId : string,
        requestDate: Date,
        returnDate : Date,
        collected : boolean,
        releasorId : string
    } 
}