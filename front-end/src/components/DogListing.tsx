import React, { useState } from 'react';
import '../App.css'; 
import {getDesc } from '../other/HealthStatus';
import { Dog } from '../types/Dog';
import HeartIcon from './HeartIcon';

const DogListing: React.FC<Dog> = (props) => {
  const { id, name, breed, age, description, healthStatus, imageName } = props;
  
  const imageUrl = imageName ? `http://localhost:8080/images/${imageName}` : `http://localhost:8080/images/not_available.png`;
  const healthDescription = getDesc(healthStatus);
  
  
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const truncateDescription = (desc: string, maxWords: number) => {
    const wordsArray = desc.split(' ');
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(' ') + '...';
    }
    return desc;
  };

  const maxWords = 9;
  
    return (
      <div className="dog-card">
        <img src={imageUrl} alt={name} className="dog-image" />
        <div className="dog-info">
          <HeartIcon />
          <h2 className="dog-name">{name}</h2>
          <p className="dog-age">{age} years old</p>
          <p className="dog-breed">{breed}</p>
          <p className="dog-healthstatus">{healthDescription}</p>
          <p className="desc-label"><b>-- Description --</b></p>
          <p className="dog-desc">{truncateDescription(description, maxWords)}</p>
        </div>
      </div>
    );
  };

export default DogListing;
