import { HistoryAction, HistoryActionTypes, IHistoryState } from '../../types/history';

const initialState: IHistoryState = {
  history: [],
};

export const historyReducer = (state = initialState, action: HistoryAction): IHistoryState => {
  switch (action.type) {
    case HistoryActionTypes.CHANGE_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};