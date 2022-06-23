import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { HistoryActionTypes } from '../../types/history';
import Star from './Start';

interface IRatingProps {
  book: {
    rating: number;
    id: number;
  };
}

const stars = [1, 2, 3, 4, 5];

const Rating: FC<IRatingProps> = (props) => {
  const [selectedRate, setSelectedRate] = useState<null | number>(props.book.rating);
  const [hoveredRate, setHoveredRate] = useState<null | number>(null);
  const dispatch = useDispatch();

  function newRating(star: number) {
    if (selectedRate === star) {
      setSelectedRate(null);
    } else {
      setSelectedRate(star);
    }
    const newBook = {
      ...props.book,
      dateChange: Date.now(),
      rating: star,
    };
    dispatch({ type: HistoryActionTypes.CHANGE_HISTORY, payload: newBook });
  }

  return (
    <div className="rating__body">
      <div className="stars">
        {stars.map((star, index) => (
          <div key={index}>
            <Star
              rating={hoveredRate || selectedRate}
              onMouseLeave={setHoveredRate}
              onMouseEnter={setHoveredRate}
              onClick={newRating}
              star={star}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;