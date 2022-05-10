import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {historyReducer} from "./historyReducer";

export const rootReducer = combineReducers({
    book: booksReducer,
    history: historyReducer
})

export type RootState = ReturnType<typeof rootReducer>