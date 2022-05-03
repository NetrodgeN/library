import React, {useState, FC} from 'react';
import starImg from './star.png'
import useLocalStorage from "../../hooks/useLocalStorage";


interface IstarProps{
    starId:number;
    rating: number|null;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Star: FC<IstarProps> = ({starId, rating, onMouseEnter, onMouseLeave, onClick}) => {
    let styleClass = "star-rating-blank";
    if (rating && rating >= starId) {
        styleClass = "star-rating-filled";
    }
    return (
        <div className='star'
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             onClick={onClick}
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
    }
}

const Rating: FC<IRatingProps> = (props) => {
    const [selectedRate, setSelectedRate] = useState<null|number>(props.book.rating) // изменить состояние на актуальное
    const [hoveredRate, setHoveredRate] = useState<null|number>(null)
    const [newLocalRating, setNewLocalRating] = useLocalStorage([], 'newRating')

    const stars =[1,2,3,4,5]

    function newRating(star) {
        const newBook={
        ...props.book,
            updateAt: Date.now(),
            rating: star,
        }
        setNewLocalRating([...newLocalRating, newBook])
    }

    console.log('asd')
    return (
        <div className='rating__body'>
            <div className="stars">
                {stars.map((star,index) =>
                    <div
                        key ={index}>
                        <Star
                            rating={hoveredRate||selectedRate}
                            onMouseLeave={()=> setHoveredRate(0)}
                            onMouseEnter={()=>setHoveredRate(star)}
                            onClick={()=> {
                                if (selectedRate === star){
                                    setSelectedRate(null)
                                } else {
                                    setSelectedRate(star)
                                }
                                newRating(star)
                            }}
                            starId={star}
                        />

                    </div>


                )}
            </div>
        </div>
    );
};

export default Rating;