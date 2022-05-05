import React from 'react';
import timeConversion from "./DateAgo";
import {IBookRating} from "./HistoryAddRating";

const HistorySearch = () => {
    let newSearch;
    try{
        newSearch = JSON.parse(localStorage.newSearch)
    }
    catch (e){
        console.log( 'ошибка ' +  e )
    }
    if(newSearch== undefined){
        return <h2>empty</h2>
    }
    let now = Date.now();

    return (
        <div className={'kkkkkk'}>
            {newSearch.slice(-1).map((element:IBookRating)=>
                <div key={element.updateAt}
                     style={{textAlign: 'center'}}>
                    <p>Последний поиск:  {element.title}</p>
                    <p>{timeConversion((now - element.updateAt))} назад</p>
                </div>
            )}
        </div>
    );
};

export default HistorySearch;