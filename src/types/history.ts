import {IBook} from "./book";

export interface IHistory extends IBook{
    dateChange:number,
    filter?: boolean,
    search?:boolean,
}

export interface IHistoryState{
    history: IHistory[],
}

export enum HistoryActionTypes {
    CHANGE_HISTORY = "CHANGE_HISTORY",
}

interface ChangeHistoryAction {
    type: HistoryActionTypes.CHANGE_HISTORY;
    payload: IHistory,
}

export type HistoryAction = ChangeHistoryAction
