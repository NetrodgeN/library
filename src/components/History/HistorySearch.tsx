import React from 'react';
import {IBook} from "../../types/book";
import timeConversion from "./DateAgo";

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
            {newSearch.slice(-1).map((element:IBook)=>
                <div key={element.dateCreate}
                     style={{textAlign: 'center'}}>
                    <p>Последний поиск:  {element.title}</p>
                    <p>{timeConversion((now - element.dateCreate))} назад</p>
                </div>
            )}
        </div>
    );
};

export default HistorySearch;