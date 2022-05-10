import React from 'react';
import HistoryAddBook from "./HistoryAddBook";
import HistoryAddRating from "./HistoryAddRating";
import HistoryFilter from "./HistoryFilter";
import HistorySearch from "./HistorySearch";
import {useTypeSelector} from "../../hooks/useTypeSelector";


const History = () => {

    const adb = useTypeSelector(state => state.history.addBook)
    const his = useTypeSelector(state => state.history.addSearch)
    const fil = useTypeSelector(state => state.history.addFilter)
    const rat = useTypeSelector(state => state.history.addRating)
    const history:any[] = []
    // const historyArr = [...history]

    console.log(history.unshift(adb, his, fil, rat))
    console.log(history)
    return (
        <div className={'history_container'}>
            {/*{history.map((a)=>{*/}

            {/*    <div{a.author}>123</div>*/}
            {/*})*/}

            {/*}*/}
            <HistoryAddBook/>
            <HistoryAddRating/>
            <HistoryFilter/>
            <HistorySearch/>
        </div>
    );
};

export default History;