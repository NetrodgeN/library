import React from 'react';
import {IBook} from "../../types/book";
import timeConversion from './DateAgo'
const HistoryAddBook = () => {

    let newBook;
    try{
        newBook = JSON.parse(localStorage.newBook)
    }
    catch (e){
        console.log( 'ошибка ' +  e )
    }
    if(newBook== undefined){
        return <h2>empty</h2>
    }

    let now = Date.now();
    return (
        <div className={'kkkkkk'}>
            {newBook.slice(-1).map((element:IBook)=>
                <div key={element.id}
                     style={{textAlign: 'center'}}>
                    <p>Вы добавили {element.title}</p>
                    <p>by {element.author.lastName}</p>
                    <p> {element.author.firstName}</p>

                    <p>{timeConversion((now - element.id))} назад</p>
                </div>
            )}
        </div>
    );
};

export default HistoryAddBook;