import React, {useEffect, useMemo, useState} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import BookList from "./BookList/BookList";
import BooksFilter from "./BooksFilter";
import Column from "./Column/Column";
import {useDispatch} from "react-redux";
import {fetchBook} from "../store/action-creator/book";

interface IFilter{
    sort:string;
    query:string;
}

const BrowseBooks: React.FC = () => {

    const {books} = useTypeSelector(state => state.book)
    const [filter, setFilter] = useState<IFilter>({sort:'', query:''})

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchBook())
    },[])

//сортировка по ..
    const sortedBooks = useMemo(()=>{
        if(filter.sort){
            return [...books].sort((a , b )=> b[filter.sort] - a[filter.sort])
        }
        return books;
    },[filter.sort, books])
//фильтрация и поиск
    const sortedAndSearchedBooks = useMemo(()=>{
        return sortedBooks.filter(book =>
            book.title.toLowerCase().includes(filter.query.toLowerCase()) ||
            book.author.lastName.toLowerCase().includes(filter.query.toLowerCase()) ||
            book.author.firstName.toLowerCase().includes(filter.query.toLowerCase()) )
    },[filter.query, sortedBooks])

    return (
        <div className='container'>
            <Column/>

            <div className="container__browse">
                <div className='title__container'>
                    <h1 className='title'>Browse Available Books</h1>
                </div>
                <BooksFilter filter={filter} setFilter={setFilter}/>
                <BookList
                  sortedAndSearchedBooks={sortedAndSearchedBooks}
                />
            </div>
        </div>
    );
};

export default BrowseBooks;