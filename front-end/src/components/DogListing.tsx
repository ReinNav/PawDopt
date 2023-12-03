import React, { useState } from 'react';
import '../App.css'; 
import {getDesc } from '../other/HealthStatus';
import { Dog } from '../types/Dog';
import HeartIcon from './HeartIcon';
import { handleData } from '../other/DogDataHandler';

const defaultImage = 'not_available.png';

const DogListing: React.FC<Dog> = (props) => {
  const { id, name, breed, age, description, healthStatus, imageName } = props;
  
  const { imageUrl, imageClassName, healthDescription, desc } = handleData(imageName, healthStatus, description);
  
    return (
      <div className="dog-card">
        <img src={imageUrl} alt={name} className={imageClassName} />
        <div className="dog-info">
          <HeartIcon />
          <h2 className="dog-name">{name}</h2>
          <p className="dog-age">{age}</p>
          <p className="dog-breed">{breed}</p>
          <p className="dog-healthstatus">{healthDescription}</p>
          <p className="desc-label"><b>-- Description --</b></p>
          <p className="dog-desc">{desc}</p>
        </div>
      </div>
    );
  };

export default DogListing;
