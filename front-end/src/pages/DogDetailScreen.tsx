import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetailScreen = () => {
    const { dogId } = useParams();
    console.log(`Rendering DogDetailScreen for ID: ${dogId}`);

    return (
        <div>
            <h1>Dog Details for ID: {dogId}</h1>
        </div>
    );
}

export default DogDetailScreen;
