import React from 'react';
import { useParams } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import { handleData } from '../other/DogDataHandler';
import '../stylesheets/detailScreen.css'; 


const DogDetailScreen = () => {
  const { dogId } = useParams();
  const { dog, state, error } = useDog(dogId);

  if (state === 'loading') return <div>Loading...</div>;
  if (state === 'error') return <div>Error: {error?.message}</div>;

  if (!dog) return <div>No data found</div>;

  const { id, name, breed, age, description, healthStatus, imageName } = dog;
  
  const { imageUrl, healthDescription } = handleData(imageName, healthStatus, description);
  return (
        <div className="flex-column detail-screen">
            <h1>Dog Details</h1>
            <div className="flex-row details-row-1-container">
                <img src={imageUrl} alt={name} className="detail-img" />
                <div className="description">
                    <h2 className="description-label">Description</h2>
                    <p>{description}</p>
                    <h2 className='more-details'>More details</h2>
                    <div className="flex-row more-details">
                        
                        <div className='flex-column details-inner-container'>
                            <p><span className='label'>Name: </span>{name}</p>
                            <p><span className='label'>Age: </span>{age}</p>
                        </div>
                        
                        <div className="flex-column details-inner-container">
                            <p><span className='label'>Breed: </span>{breed}</p>
                            <p><span className='label'>Health status: </span>{healthDescription}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DogDetailScreen;
