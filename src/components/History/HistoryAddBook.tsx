import React from 'react';
import timeConversion from './DateAgo'
import {useTypeSelector} from "../../hooks/useTypeSelector";

const HistoryAddBook = () => {
    const newBook = useTypeSelector(state => state.history.addBook)

    let now = Date.now();
    return (
        <div className="history_element__container">
            {newBook.map(element=>
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
                        <span>{timeConversion((now - element.dateChange))} ago</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default HistoryAddBook;
