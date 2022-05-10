import {HistoryAction, HistoryActionTypes, IHistoryState} from "../../types/history";

const initialState:IHistoryState ={
    addRating:[],
    addBook:[],
    addFilter:[],
    addSearch:[],
}

export const historyReducer = (state = initialState, action: HistoryAction): IHistoryState => {
    switch (action.type) {
        case HistoryActionTypes.CHANGE_RATING:
            return {...state, addRating: action.payload}
        case HistoryActionTypes.CHANGE_BOOK:
            return {...state, addBook: action.payload}
        case HistoryActionTypes.CHANGE_FILTER:
            return {...state, addFilter: action.payload}
        case HistoryActionTypes.CHANGE_SEARCH:
            return {...state, addSearch: action.payload}
        default:
            return state
    }
};