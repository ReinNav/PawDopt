import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DogListing from './components/DogListing';
import { Dog } from './types/Dog';
import { fetchAllDogs } from './API';

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedDogs = await fetchAllDogs();
      if (fetchedDogs) {
        setDogs(fetchedDogs);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Header username="Reinardus" />
      <h1 className="list-heading">Adopt your new best friend!</h1>
      <div className="dog-list-container flex-row">
        {dogs.map(dog => (
          <DogListing key={dog.id} {...dog} />
        ))}
      </div>
    </div>
  );
}

export default App;
