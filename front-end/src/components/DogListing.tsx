import React, { useState } from 'react';
import '../App.css'; 
import { HealthStatus } from '../other/HealthStatus';


interface DogListingProps {
    name: string;
    breed: string;
    age: number;
    description: string;
    healthStatus: HealthStatus;
    imageUrl: string; 
  }
  
  const DogListing: React.FC<DogListingProps> = ({ name, breed, age, description, healthStatus, imageUrl }) => {
    const [liked, setLiked] = useState(false);
  
    const toggleLike = () => {
      setLiked(!liked);
    };
  
    return (
      <div className="dog-card">
        <img src={imageUrl} alt={name} className="dog-image" />
        <div className="dog-info">
          <h2>{name}</h2>
          <p>Breed: {breed}</p>
          <p>Age: {age} years old</p>
          <p>Description: <br/>{description}</p>
          <p>Health Status: {healthStatus}</p>
          <button className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
            {liked ? 'Unlike' : 'Like'} ❤️
          </button>
        </div>
      </div>
    );
  };

export default DogListing;
