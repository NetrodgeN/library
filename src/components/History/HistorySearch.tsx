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
        return <h2/>
    }
    let now = Date.now();

    return (
        <div className={'history_element__container'}>
            {newSearch.slice(-1).map((element:IBookRating)=>
                <div key={element.updateAt} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>Последний поиск: </span>

                            <span className={'light__color'}>{element.title}</span>
                        </div>
                        <span>{timeConversion((now - element.updateAt))} назад</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistorySearch;