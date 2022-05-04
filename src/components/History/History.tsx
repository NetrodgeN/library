import React from 'react';
import HistoryAddBook from "./HistoryAddBook";
import HistoryAddRating from "./HistoryAddRating";
import HistoryFilter from "./HistoryFilter";


const History = () => {


    return (
        <div className={''}>
            <HistoryAddBook/>
            <HistoryAddRating/>
            <HistoryFilter/>
        </div>
    );
};

export default History;