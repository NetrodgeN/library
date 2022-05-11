import React, {useState, FC} from 'react';
import starImg from './star.png'
import {useDispatch} from "react-redux";
import {HistoryActionTypes} from "../../types/history";

interface IstarProps{
    star:number;
    rating: number|null;
    onMouseEnter: React.Dispatch<React.SetStateAction<null|number>>;
    onMouseLeave: React.Dispatch<React.SetStateAction<null|number>>;
    onClick: (e: number) => void;
}

const Star: FC<IstarProps> = ({star, rating, onMouseEnter, onMouseLeave, onClick}) => {
    let styleClass = "star-rating-blank";
    if (rating && rating >= star) {
        styleClass = "star-rating-filled";
    }
    return (
        <div className='star'
             onMouseEnter={()=> onMouseEnter(star)}
             onMouseLeave={()=> onMouseLeave(0)}
             onClick={()=> onClick(star)}
        >
            <img
                className={styleClass}
                src={starImg}
                alt="star"
            />
        </div>
    );
};


interface IRatingProps{
    book:{
        rating: number;
        id:number;
    }
}

const stars =[1,2,3,4,5]

const Rating: FC<IRatingProps> = (props) => {
    const [selectedRate, setSelectedRate] = useState<null|number>(props.book.rating)
    const [hoveredRate, setHoveredRate] = useState<null|number>(null)
    const dispatch = useDispatch()
    // const addRating = useTypeSelector(state => state.history.addRating)


    function newRating(star:number) {
        if (selectedRate === star){
            setSelectedRate(null)
        } else {
            setSelectedRate(star)
        }
        const newBook={
        ...props.book,
            dateChange: Date.now(),
            rating: star,
        }
        dispatch({type:HistoryActionTypes.CHANGE_HISTORY, payload: newBook})
    }

    return (
        <div className='rating__body'>
            <div className="stars">
                {stars.map((star, index) =>
                    <div
                        key={index}>
                        <Star
                            rating={hoveredRate || selectedRate}
                            onMouseLeave={setHoveredRate}
                            onMouseEnter={setHoveredRate}
                            onClick={newRating}
                            star={star}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rating;