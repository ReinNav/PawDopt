import React, { useState } from 'react';
import '../App.css'; 
import { HealthStatus, getDesc } from '../other/HealthStatus';
import { Dog } from '../types/Dog';

const DogListing: React.FC<Dog> = (props) => {
  const { id, name, breed, age, description, healthStatus, imageName } = props;
  
  const imageUrl = imageName ? `http://localhost:8080/images/${imageName}` : `http://localhost:8080/images/not_available.png`;
  const healthDescription = getDesc(healthStatus);
  
  
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  
    return (
      <div className="dog-card">
        <img src={imageUrl} alt={name} className="dog-image" />
        <div className="dog-info">
          <h2>{name}</h2>
          <p>{breed}</p>
          <p>{age} years old</p>
          <p>{description}</p>
          <p>Health Status: {healthDescription}</p>
        </div>
      </div>
    );
  };

export default DogListing;
