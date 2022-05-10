import React from 'react';
import timeConversion from "./DateAgo";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const HistoryAddRating = () => {
    const addRating = useTypeSelector(state => state.history.addRating)

    let now = Date.now();

    return (
        <div className={'history_element__container'}>
            {addRating.map(element =>
                <div key={element.id} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>You change rating </span>
                            <span className={'light__color'}>{element.title} </span>
                            <span>on</span>
                            <span className={'light__color'}> {element.rating}  </span>
                            <span>by </span>
                            <span className={'light__color'}>{element.author.firstName} {element.author.lastName} </span>
                        </div>
                        <span>{timeConversion((now - element.dateChange))} Ago</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default HistoryAddRating;