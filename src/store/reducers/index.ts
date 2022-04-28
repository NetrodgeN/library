import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {filterReducer} from "./filterReducer";

export const rootReducer = combineReducers({
    book: booksReducer,
    filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>