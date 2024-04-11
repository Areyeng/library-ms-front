export interface UserState{
    name: string,
    surname: string,
    emailAddress: string,
    phoneNumber: string,
    password: string,
    memberID: string
}
export interface UserActions{
    GetAllUsers:()=> Promise<any>,
    GetUser:(userID:any)=> Promise<any>
}
export interface UserDetails{
    name: string,
    surname: string,
    emailAddress: string,
    phoneNumber: string,
    password: string,
    memberID: string
}

export interface UserAction{
    type: string,
    payload?: {
    title : string,
        name: string,
        surname: string,
        emailAddress: string,
        phoneNumber: string,
        password: string,
        memberID: string
    } 
}