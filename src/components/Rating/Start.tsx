import React, {FC} from "react";
import starImg from "./star.png";

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
export default Star;