export interface  IAuthor{
    firstName: string;
    lastName:string;
}

export interface IBook{
    id: number;
    title: string;
    rating: number;
    cost: number;
    author: IAuthor;
    image_url: string;
    [index:string]:any,
}

export interface BooksState {
    books:IBook[];
    loading:boolean;
    error: null | string;
}

export enum BooksActionTypes {
    FETCH_BOOKS="FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS="FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR="FETCH_BOOKS_ERROR",
    BOOKS_ADD="BOOKS_ADD",
}

interface FetchBooksAction{
    type:BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction{
    type:BooksActionTypes.FETCH_BOOKS_SUCCESS;
    payload:IBook[];
}

interface FetchBooksErrorAction{
    type:BooksActionTypes.FETCH_BOOKS_ERROR;
    payload:string;
}

interface BooksAddAction{
    type:BooksActionTypes.BOOKS_ADD;
    payload:IBook;
}

export type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction | BooksAddAction
