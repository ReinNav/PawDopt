// App component
import React from 'react';
import Header from '../components/Header';
import DogListing from '../components/DogListing';
import { useDogs } from '../domain/hooks';
import { useNavigate } from 'react-router-dom';

function MainScreen() {
  const { dogs, state } = useDogs();

  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate(`/dogs/add`);
  };
  return (
    <div className="main-screen">
      {state === 'loading' && <p className="state-msg">Loading items…</p>}
      {state === 'error' && <p className="state-msg">Error in fetching items.<br></br>Please try reloading the page or try again later.</p>}
      {state === 'success' && dogs.length > 0 && (
        <>
          <h1 className="list-heading">Adopt your new best friend!</h1>
          <div className="dog-list-container flex-row">
            {dogs.map(dog => (
              <DogListing key={dog.id} {...dog} />
            ))}
          </div>
          <div className="add-btn-container">
            <button className='btn add-btn' onClick={handleAddClick}>Add dog</button>
          </div>
        </>)}
       {state === 'success' && dogs.length === 0 && (
        <div className="no-dogs-message">
          <p>There are no dogs currently. Click below to add a new one!</p>
          <button className='btn add-btn center' onClick={handleAddClick}>Add dog</button>
        </div>
      )}
      
    </div>
  );
}

export default MainScreen;
