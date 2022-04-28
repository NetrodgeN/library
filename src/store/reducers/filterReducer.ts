import {FiltersAction, FiltersActionTypes, FiltersState} from "../../types/filters";

const initialState: FiltersState={
    filters:[],
    loading: false,
    error: null,
}

export const filterReducer = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type){
        case FiltersActionTypes.FETCH_FILTERS:
            return {loading: true, error: null, filters:[]}
        case FiltersActionTypes.FETCH_FILTERS_SUCCESS:
            return {loading: false, error: null, filters:action.payload}
        case FiltersActionTypes.FETCH_FILTERS_ERROR:
            return {loading: false, error: action.payload, filters:[]}
        default:
            return state;
    }
}