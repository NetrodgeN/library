import React, {useState, FC} from 'react';
import {useDispatch} from "react-redux";
import {BooksActionTypes} from "../types/book";
import Input from "./UI/Input/Input";
import {HistoryActionTypes} from "../types/history";

interface IBookFormProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookForm:FC<IBookFormProps> = ({setModal}) => {
    const [addBook, setAddBook] = useState({title:'',  author:{lastName:'', firstName:''}});
    const dispatch = useDispatch()

    const addNewBook = ((e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        const newBook={
            ...addBook,
            dateChange: Date.now(),
            id: Date.now(),
        }
        dispatch({type:BooksActionTypes.BOOKS_ADD, payload:  newBook});
        dispatch({type:HistoryActionTypes.CHANGE_HISTORY, payload: newBook})
        setAddBook({title:'',  author:{lastName:'', firstName:''}})
        setModal(false)

    })




    return (
        <form name="add__book" className={"addBook__form"}>
            <Input
                value={addBook.title}
                placeholder='Book name'
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setAddBook({...addBook, title:event.target.value})}
            />
            <Input
                value={addBook.author.firstName}
                placeholder='Author firstName'
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setAddBook({...addBook,  author:{firstName: event.target.value, lastName: addBook.author.lastName}})}
            />
            <Input
                value={addBook.author.lastName}
                placeholder='Author lastName'
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => setAddBook({...addBook, author:{lastName: event.target.value, firstName: addBook.author.firstName}})}
            />
            <button className={'add__btn'} onClick={(e) => addNewBook(e)}>ADD book</button>
        </form>
    );
};

export default BookForm;