import { BooksAction, BooksActionTypes, BooksState } from '../../types/book';

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [] };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return { loading: false, error: null, books: action.payload };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return { loading: false, error: action.payload, books: [] };
    case BooksActionTypes.BOOKS_ADD:
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};