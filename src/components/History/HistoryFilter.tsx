import React from 'react';
import {IBook} from "../../types/book";
import timeConversion from "./DateAgo";

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
            {newFilter.slice(-1).map((element:IBook)=>
                <div key={element.dateCreate}
                     style={{textAlign: 'center'}}>
                    <p>Использован фильтр:  {element.title}</p>
                    <p>{timeConversion((now - element.dateCreate))} назад</p>
                </div>
            )}
        </div>
    );
};

export default HistoryFilter;