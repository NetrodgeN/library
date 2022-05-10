import React from 'react';
import timeConversion from "./timeConversion";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const HistorySearch = () => {
    const historySearch = useTypeSelector(state => state.history.addSearch)
    let now = Date.now();

    return (
        <div className={'history_element__container'}>
            {historySearch.map(element =>
                <div key={element.dateChange} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>Последний поиск: </span>

                            <span className={'light__color'}>{element.title}</span>
                        </div>
                        <span>{timeConversion((now - element.dateChange))} назад</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistorySearch;
