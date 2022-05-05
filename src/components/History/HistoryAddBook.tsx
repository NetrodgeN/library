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
        return <h2/>
    }

    let now = Date.now();
    return (
        <div className="history_element__container">
            {newBook.slice(-1).map((element: IBook) =>
                <div key={element.id} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>You added </span>
                            <span className={'light__color'}>{element.title} </span>
                            <span>by </span>
                            <span className={'light__color'}>
                            {element.author.firstName} {element.author.lastName}</span>
                        </div>
                        <span>{timeConversion((now - element.id))} ago</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoryAddBook;