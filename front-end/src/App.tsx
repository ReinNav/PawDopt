import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DogListing from './components/DogListing';
import { Dog } from './types/Dog';

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/dogs')
      .then(response => response.json())
      .then(data => setDogs(data as Dog[]))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <Header username="Reinardus" />
      <div className="dog-list-container flex-row">
        {dogs.map(dog => (
        <DogListing key={dog.id} {...dog} />
      ))}
      </div>
      
    </div>
  );
}

export default App;
