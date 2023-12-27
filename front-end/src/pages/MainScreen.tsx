// App component
import React from 'react';
import Header from '../components/Header';
import DogListing from '../components/DogListing';
import { useDogs } from '../domain/hooks';

function MainScreen() {
  const { dogs, state } = useDogs();

  return (
    <div className="Main">
      <h1 className="list-heading">Adopt your new best friend!</h1>
      <div className="dog-list-container flex-row">
        {state === 'loading' && <p className="state-msg">Loading items…</p>}
        {state === 'error' && <p className="state-msg">Error in fetching items.<br></br>Please try reloading the page or try again later.</p>}
        {state === 'success' && dogs.map(dog => (
          <DogListing key={dog.id} {...dog} />
        ))}
      </div>
    </div>
  );
}

export default MainScreen;
