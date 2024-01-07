import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import { handleData } from '../other/DogDataHandler';
import '../stylesheets/detailScreen.css'; 
import '../stylesheets/main.css'; 
import SadPuppy from '../components/SadPuppy';

const DogDetailScreen = () => {
  const { dogId } = useParams();
  const { dog, state, error } = useDog(dogId);

  const navigate = useNavigate();

  const handleEditClick = () => {
    if (dog) {
      navigate(`/dogs/${dog.id}/edit`);
    }
  };

  const handleDeleteClick = () => {
    if (dog) {
      navigate(`/dogs/${dog.id}/delete`);
    }
  };

  if (state === 'loading') return <p className="state-msg">Loading items…</p>;
  if (state === 'error') {
    return (
      <div>
        <SadPuppy />
        <p className="state-msg-error">Error in fetching dog information.<br></br>Please try reloading the page or try again later.</p>
      </div>
    );
  }

  if (state === 'success' && dog) {
    const { id, name, breed, age, description, healthStatus, image } = dog;
    const { imageUrl, healthDescription } = handleData(id, image, healthStatus, description);

    return (
      <div className="flex-column detail-screen">
        <h1>{dog.name}'s Details</h1>
        <div className="flex-row detail-screen-inner-container">
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
        <div className='flex-row edit-delete-btn-container'>
          <button className='delete-btn' onClick={handleDeleteClick}>Delete</button>
          <button className='edit-btn' onClick={handleEditClick}>Edit</button>
        </div>
      </div>
    );
  }

  if (state === 'success' && !dog) return <p className="state-msg">Error in fetching items.<br></br>Please try reloading the page or try again later.</p>;
  return <p className="state-msg">Error in fetching items.<br></br>Please try reloading the page or try again later.</p>;
};

export default DogDetailScreen;
