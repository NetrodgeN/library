import React from 'react';
import timeConversion from "./timeConversion";
import {IHistory} from "../../types/history";

interface IHistoryProps {
   element: IHistory
}

const HistoryBlock:React.FC<IHistoryProps> = ({element}) => {
    const now = Date.now();

    if( element.author === undefined && element.search )
        return (
        <div className={'history__element'}>
            <i className="fa-regular fa-clock icon__block"/>
            <div className={"container_history__title"}>
                <div>
                    <span>Search:</span>
                    <span className={'light__color'}> {element.title}</span>
                </div>
                <span>{timeConversion((now - element.dateChange))} ago</span>
            </div>
        </div>
        )

    if( element.rating === undefined && element.filter === undefined && element.search === undefined )
        return (
            <div className={'history__element'}>
                <i className="fa-regular fa-clock icon__block"/>
                <div className={"container_history__title"}>
                    <div>
                        <span>You add book: </span>
                        <span className={'light__color'}>{element.title} </span>
                        <span>by </span>
                        <span className={'light__color'}>{element.author.firstName} {element.author.lastName} </span>
                    </div>
                    <span>{timeConversion((now - element.dateChange))} ago</span>
                </div>
            </div>
        )

    if(element.author === undefined && element.filter)
        return ( <div className={'history__element'}>
                <i className="fa-regular fa-clock icon__block"/>
                <div className={"container_history__title"}>
                    <div>
                        <span>Filter:</span>
                        <span className={'light__color'}> {element.title}</span>
                    </div>
                    <span>{timeConversion((now - element.dateChange))} ago</span>
                </div>
            </div>

        )

    return (
        <div className={'history_element__container'}>
            <div className={'history__element'}>
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
                    <span>{timeConversion((now - element.dateChange))} ago</span>
                </div>
            </div>
        </div>
    );
};

export default HistoryBlock;