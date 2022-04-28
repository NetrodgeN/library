export interface FiltersState{
    filters: any[];
    loading: boolean;
    error: null | string;
}

export enum FiltersActionTypes{
    FETCH_FILTERS ="FETCH_FILTERS",
    FETCH_FILTERS_SUCCESS ="FETCH_FILTERS_SUCCESS",
    FETCH_FILTERS_ERROR ="FETCH_FILTERS_ERROR",
}

interface FetchFilterAction{
    type: FiltersActionTypes.FETCH_FILTERS;
}
interface FetchFilterSuccessAction{
    type: FiltersActionTypes.FETCH_FILTERS_SUCCESS;
    payload: any[]
}
interface FetchFilterErrorAction{
    type: FiltersActionTypes.FETCH_FILTERS_ERROR;
    payload: string;
}
//объединяем три типа
export type FiltersAction = FetchFilterAction | FetchFilterSuccessAction | FetchFilterErrorAction
