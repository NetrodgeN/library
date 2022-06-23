import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBook } from '../store/action-creator/book';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { IBook } from '../types/book';
import Rating from './Rating/Rating';

interface BookListProps {
  sortedAndSearchedBooks: IBook[];
}

const BookList: FC<BookListProps> = ({ sortedAndSearchedBooks }) => {
  const { loading, error } = useTypeSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <div className={'books__container'}>
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {sortedAndSearchedBooks.map((book) => (
        <div className={'book__card'} key={book.id}>
          <img className={'book__cover'} src={book.image_url} alt="logo" />
          <p className="book__title">{book.title}</p>
          <p className="book__author">
            by {book.author.firstName} {book.author.lastName}
          </p>
          <Rating book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;