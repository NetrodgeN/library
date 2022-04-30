import React, {useEffect, FC} from 'react';
import {useDispatch} from "react-redux";
import {fetchBook} from "../../store/action-creator/book";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import classes from './BookList.module.css'
import {IBook} from "../../types/book";
import Rating from "../Rating/Rating";

interface BookListProps {
    sortedAndSearchedBooks:IBook[];
}

const BookList: FC<BookListProps> = ({sortedAndSearchedBooks}) => {
    const {loading, error} = useTypeSelector(state => state.book)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchBook())
    },[])



    return (
        <div className={"books__container"}>
            {loading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {sortedAndSearchedBooks.map(book =>
                <div className={classes.book__card} key={book.id}>
                    <img className={classes.book__cover} src={book.image_url} alt="logo"/>
                    <div>{book.title}</div>
                    <div>by {book.author.firstName} {book.author.lastName}</div>
                    <Rating props={book.rating}/>
                </div>
            )}
        </div>
    );
};

export default BookList;