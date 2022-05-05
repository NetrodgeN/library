import React from 'react';

import timeConversion from "./DateAgo";
import {IBookRating} from "./HistoryAddRating";



const HistoryFilter = () => {

    let newFilter;
    try{
        newFilter = JSON.parse(localStorage.newFilter)
    }
    catch (e){
        console.log( 'ошибка ' +  e )
    }
    if(newFilter== undefined){
        return <h2>empty</h2>
    }
    let now = Date.now();

    return (
        <div className={'kkkkkk'}>
            {newFilter.slice(-1).map((element: IBookRating) =>
                <div key={element.updateAt}
                     style={{textAlign: 'center'}}>
                    <p>Использован фильтр: {element.title}</p>
                    <p>{timeConversion((now - element.updateAt))} назад</p>
                </div>
            )}
        </div>
    );
};

export default HistoryFilter;