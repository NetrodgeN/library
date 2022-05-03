import React from 'react';
import {IBook} from "../../types/book";
import timeConversion from "./DateAgo";

const HistoryAddRating = () => {

    let newRating;
    try{
        newRating = JSON.parse(localStorage.newRating)
    }
    catch (e){
        console.log( 'ошибка ' +  e )
    }
    if(newRating== undefined){
        return <h2>empty</h2>
    }
    let now = Date.now();

    return (
        <div className={'RATING'}>
            {newRating.slice(-1).map((element)=>
                <div key={element.id}>

                     <p>Вы изменили рейтинг {element.title}</p>
                    <p>{element.rating}</p>
                     <p>by {element.author.lastName}</p>
                    <p> {element.author.firstName}</p>

                    <p>{timeConversion((now - element.updateAt))} Ago</p>
                </div>
            )}
        </div>
    );
};

export default HistoryAddRating;