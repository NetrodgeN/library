export interface IHistoryState{
    addRating: any[],
    addBook:any[],
    addFilter:any[],
    addSearch:any[],
}

export enum HistoryActionTypes {
    CHANGE_RATING = "CHANGE_RATING",
    CHANGE_BOOK = "CHANGE_BOOK",
    CHANGE_FILTER = "CHANGE_FILTER",
    CHANGE_SEARCH = "CHANGE_SEARCH",
}

interface ChangeRatingAction {
    type: HistoryActionTypes.CHANGE_RATING;
    payload: any[]
}
interface ChangeBookAction {
    type: HistoryActionTypes.CHANGE_BOOK;
    payload: any[]
}
interface ChangeFilterAction {
    type: HistoryActionTypes.CHANGE_FILTER;
    payload: any[]
}
interface ChangeSearchAction {
    type: HistoryActionTypes.CHANGE_SEARCH;
    payload: any[]
}

export type HistoryAction = ChangeRatingAction | ChangeBookAction | ChangeFilterAction | ChangeSearchAction
