import React from 'react';
import {IBook} from "../../types/book";
import timeConversion from "./DateAgo";

 export interface IBookRating extends IBook{
    updateAt:number;
}

const HistoryAddRating = () => {

    let newRating;
    try{
        newRating = JSON.parse(localStorage.newRating)
    }
    catch (e){
        console.log( 'ошибка ' +  e )
    }
    if(newRating== undefined){
        return <h2/>
    }
    let now = Date.now();

    return (
        <div className={'history_element__container'}>
            {newRating.slice(-1).map((element: IBookRating)=>
                <div key={element.id} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>You change rating </span>
                            <span className={'light__color'}>{element.title}</span>
                            <span>on</span>
                            <span className={'light__color'}> {element.rating}  </span>
                            <span>by </span>
                            <span className={'light__color'}>{element.author.firstName} {element.author.lastName} </span>
                    </div>
                    <span>{timeConversion((now - element.updateAt))} Ago</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoryAddRating;