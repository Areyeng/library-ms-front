export interface EventState{
    name: string,
    description: string,
    eventDate: Date,
    location: string,
}
export interface EventActions{
    AddEvent: (eventDetails:EventDetails)=> void
}
export interface EventDetails{
    name: string,
    description: string,
    eventDate: Date,
    location: string,
}

export interface EventAction{
    type: string,
    payload?: {
        name: string,
        description: string,
        eventDate: Date,
        location: string,
    } 
}
