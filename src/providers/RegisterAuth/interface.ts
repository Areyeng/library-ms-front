export interface RegisterState{
    name: string,
    surname: string,
    emailAddress: string,
    phoneNumber: string,
    password: string,
    memberID: string
}
export interface Register{
    name: string,
    surname: string,
    emailAddress: string,
    phoneNumber: string,
    password: string,
    memberID: string
}

export interface Action{
    type: string,
    payload?: {
        name: string,
        surname: string,
        emailAddress: string,
        phoneNumber: string,
        password: string,
        memberID: string
    } 
}
export interface RegisterActions{
    Register: (register:Register)=> void
    
}