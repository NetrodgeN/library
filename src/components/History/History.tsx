import React from 'react';
import HistoryAddBook from "./HistoryAddBook";
import HistoryAddRating from "./HistoryAddRating";
import HistoryFilter from "./HistoryFilter";
import HistorySearch from "./HistorySearch";


const History = () => {


    return (
        <div className={''}>
            <HistoryAddBook/>
            <HistoryAddRating/>
            <HistoryFilter/>
            <HistorySearch/>
        </div>
    );
};

export default History;