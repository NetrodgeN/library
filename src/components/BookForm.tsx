import React, {useState, FC} from 'react';
import {useDispatch} from "react-redux";
import {BooksActionTypes} from "../types/book";
import Input from "./UI/Input/Input";
import useLocalStorage from "../hooks/useLocalStorage";

interface IBookFormProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookForm:FC<IBookFormProps> = ({setModal}) => {
    const [newLocalBook, setNewLocalBook] = useLocalStorage<object[]>([], 'newBook')
    const [addBook, setAddBook] = useState({title:'',  author:{lastName:'', firstName:''}});
    const dispatch = useDispatch()

    const addNewBook = ((e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        const newBook={
            ...addBook,
            id: Date.now()
        }
        dispatch({type:BooksActionTypes.BOOKS_ADD, payload:  newBook});
        setNewLocalBook([...newLocalBook, newBook])
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