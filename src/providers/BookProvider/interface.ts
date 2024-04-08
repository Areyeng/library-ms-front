export interface BookState{
    title : string,
    author : string,
    description : string,
    publisher : string,
    isbn : number,
    image : string,
    genre : string,
    shelfNumber : number,
    like : number
}
export interface BookActions{
    AddBook: (bookDetails:BookDetails)=> void
    GetBook: (bookId:any)=> Promise<any>
    GetAllBooks:()=> Promise<any>
}
export interface BookDetails{
    title : string,
    author : string,
    description : string,
    publisher : string,
    isbn : number,
    image : string,
    genre : string,
    shelfNumber : number,
    like : number
}

export interface BookAction{
    type: string,
    payload?: {
    title : string,
    author : string,
    description : string,
    publisher : string,
    isbn : number,
    image : string,
    genre : string,
    shelfNumber : number,
    like : number
    } 
}
export interface GetBook{
    type: string;
    payload: BookState[];
}
export interface GetAllBooks{
    type: string;
    payload?: BookState[];
}