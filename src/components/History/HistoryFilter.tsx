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
        return <h2/>
    }
    let now = Date.now();

    return (

        <div className={'history_element__container'}>
            {newFilter.slice(-1).map((element: IBookRating) =>
                <div key={element.updateAt} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>Использован фильтр:</span>
                            <span className={'light__color'}> {element.title}</span>
                        </div>
                    <span>{timeConversion((now - element.updateAt))} ago</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoryFilter;