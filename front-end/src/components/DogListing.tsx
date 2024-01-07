import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../stylesheets/main.css'; 
import { Dog } from '../types/Dog';
import HeartIcon from './HeartIcon';
import { handleData } from '../other/DogDataHandler';
import { useNavigate } from 'react-router-dom';


const DogListing: React.FC<Dog> = (props) => {
  const { id, name, breed, age, description, healthStatus, imageName } = props;
  
  const { imageUrl, imageClassName, healthDescription, healthClassName, desc } = handleData(imageName, healthStatus, description);
  
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/dogs/${id}/detail`);
  };

    return (
      <div className="dog-card" onClick={handleCardClick}>
        <img src={imageUrl} alt={name} className={imageClassName} />
        <div className="dog-info">
          <HeartIcon />
          <h2 className="dog-name">{name}</h2>
          <p className="dog-age">{age}</p>
          <p className="dog-breed">{breed}</p>
          <p className={healthClassName}>{healthDescription}</p>
          <p className="desc-label"><b>-- Description --</b></p>
          <p className="dog-desc">{desc}</p>
        </div>
        <Outlet />
      </div>
    );
  };

export default DogListing;
