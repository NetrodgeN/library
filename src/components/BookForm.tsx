import React, {useState, FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {BooksActionTypes} from "../types/book";
import Input from "./UI/Input/Input";
import {HistoryActionTypes} from "../types/history";

interface IBookFormProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookForm:FC<IBookFormProps> = ({setModal}) => {
    const [addBook, setAddBook] = useState({title:'',  author:{lastName:'', firstName:''}, image_url:''});
    const [titleDirty, setTitleDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [imgDirty, setImgDirty] = useState(false);

    const [titleError, setTitleError] = useState("Заголовок не может быть пустым")
    const [lastNameError, setLastNameError] = useState("Фамилия не может быть пустой")
    const [firstNameError, setFirstNameError] = useState("Имя не может быть пустым")
    const [imgError, setImgError] = useState("Без изображения - никак :( ")

    const [formValid, setFormValid]= useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(titleError || firstNameError || lastNameError || imgError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [titleError, firstNameError, lastNameError, imgError])

    const addNewBook = ((e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        const newBook = {
            ...addBook,
            dateChange: Date.now(),
            id: Date.now(),
        };
        dispatch({type: BooksActionTypes.BOOKS_ADD, payload: newBook});
        dispatch({type: HistoryActionTypes.CHANGE_HISTORY, payload: newBook});
        setAddBook({title: '', author: {lastName: '', firstName: ''},image_url:''});
        setModal(false);

        setTitleDirty(false)
        setLastNameDirty(false)
        setFirstNameDirty(false)
        setImgDirty(false)
        setFormValid(false)

        setTitleError("Заголовок не может быть пустым")
        setLastNameError("Фамилия не может быть пустой")
        setFirstNameError("Имя не может быть пустым")
        setImgError("Без изображения - никак :( ")
    })

    const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        switch (event.target.name){
            case 'title':
                setTitleDirty(true)
                break;
            case 'firstName':
                setFirstNameDirty(true)
                break;
            case 'lastName':
                setLastNameDirty(true)
                break;
            case 'image_url':
                setImgDirty(true)
                break;
        }
    }
    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddBook({...addBook, title: event.target.value})
        if(!event.target.value){
            setTitleError('Заголовок не может быть пустым')
        } else {
            setTitleError('')
        }

    }
    const firstNameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddBook({
            ...addBook,
            author: {firstName: event.target.value, lastName: addBook.author.lastName}
        })
        if(!event.target.value){
            setFirstNameError('Имя не может быть пустым')
        } else {
            setFirstNameError('')
        }

    }
    const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddBook({
            ...addBook,
            author: {lastName: event.target.value, firstName: addBook.author.firstName}
        })
        if(!event.target.value){
            setLastNameError('Фамилия не может быть пустой')
        } else {
            setLastNameError('')
            setTitleDirty(true)
        }

    }
    const imgHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddBook({...addBook, image_url: event.target.value})
        if(!event.target.value){
            setImgError('Без url - никак :(')
        } else {
            setImgError('')
        }

    }

    return (
        <form name="add__book" className={"addBook__form"}>
            {(titleDirty && titleError) && <div className='input__error'>{titleError}</div>}
            <Input
                onBlur={(event: React.ChangeEvent<HTMLInputElement>)=> blurHandler(event)}
                name='title'
                value={addBook.title}
                placeholder='Book name'
                onChange={(event) => titleHandler(event)}
            />
            {(firstNameDirty && firstNameError) && <div className='input__error'>{firstNameError}</div>}
            <Input
                name='firstName'
                onBlur={(event: React.ChangeEvent<HTMLInputElement>)=> blurHandler(event)}
                value={addBook.author.firstName}
                placeholder='Author first name'
                onChange={(event) => firstNameHandler(event)}
            />
            {(lastNameDirty && lastNameError) && <div className='input__error'>{lastNameError}</div>}
            <Input
                name='lastName'
                value={addBook.author.lastName}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>)=> blurHandler(event)}
                placeholder='Author last name'
                onChange={(event) => lastNameHandler(event)}
            />
            {(imgDirty && imgError) && <div className='input__error'>{imgError}</div>}
            <Input
                name='image_url'
                onBlur={(event: React.ChangeEvent<HTMLInputElement>)=> blurHandler(event)}
                value={addBook.image_url}
                placeholder='Image https:// '
                onChange={(event) => imgHandler(event)}
            />
            <button
                disabled={!formValid}
                className={'add__btn'}
                onClick={(e) => addNewBook(e)}
            >ADD book
            </button>
        </form>
    );
};

export default BookForm;