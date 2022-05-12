import React from 'react';
import HistoryBlock from "./HistoryBlock";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const History = () => {
    const history = useTypeSelector(state => state.history.history)

    return (
        <div className={'history_container'}>
            {history.slice(-3).reverse().map(element =>
                <HistoryBlock
                    element={element}
                    key={element.dateChange}
                />
            )}
        </div>
    );
};

export default History;