// https://rsu-library-api.herokuapp.com/books

import {BooksAction, BooksActionTypes} from "../../types/book";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchBook = () =>{
    return async (dispatch: Dispatch<BooksAction>) => {
        try{
            dispatch({
                type:BooksActionTypes.FETCH_BOOKS})
            const response = await axios.get("https://rsu-library-api.herokuapp.com/books")
            dispatch({type:BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch({
                type:BooksActionTypes.FETCH_BOOKS_ERROR,
                payload:'Произошла ошибка при загрузке книг'
            })
        }
    }
}



