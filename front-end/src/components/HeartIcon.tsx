import React, { useState } from 'react';
import '../App.css';

const HeartIcon: React.FC = () => {
    const [isFilled, setIsFilled] = useState(false);
    const [likeNumber, setLikeNumber] = useState(0);

    const handleClick = () => {
        setIsFilled(!isFilled);
        setLikeNumber(!isFilled ? 1 : 0);
    };

    return (
        <div className="flex-row" id="like-container">
            {likeNumber !== 0 && <p>{likeNumber}</p>}
            <svg className="heart-icon" onClick={handleClick} fill={isFilled ? "red" : "none"} height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        </div>
    );
};

export default HeartIcon;
