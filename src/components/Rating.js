import React, { useState } from 'react';

const Rating = ({ onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        onRate(rate);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
