import React from 'react';
import timeConversion from "./timeConversion";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const HistoryFilter = () => {
    const newFilter = useTypeSelector(state => state.history.addFilter)

    let now = Date.now();

    return (
        <div className={'history_element__container'}>
            {newFilter.map(element =>
                <div key={element.dateChange} className={'history__element'}>
                    <i className="fa-regular fa-clock icon__block"/>
                    <div className={"container_history__title"}>
                        <div>
                            <span>Использован фильтр:</span>
                            <span className={'light__color'}> {element.title}</span>
                        </div>
                        <span>{timeConversion((now - element.dateChange))} ago</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoryFilter;