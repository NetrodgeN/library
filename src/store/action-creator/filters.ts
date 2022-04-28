// https://rsu-library-api.herokuapp.com/filters
import {FiltersAction, FiltersActionTypes} from "../../types/filters";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchFilters = () =>{
    return async (dispatch: Dispatch<FiltersAction>) => {
        try{
            dispatch({
                type:FiltersActionTypes.FETCH_FILTERS})
            const response = await axios.get("https://rsu-library-api.herokuapp.com/filters")
            dispatch({type:FiltersActionTypes.FETCH_FILTERS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch({
                type:FiltersActionTypes.FETCH_FILTERS_ERROR,
                payload:'Произошла ошибка при загрузке фильтров'
            })
        }
    }
}



