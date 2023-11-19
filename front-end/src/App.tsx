import React from 'react';
import Header from './components/Header'
import './App.css';
import { HealthStatus } from './other/HealthStatus';
import DogListing from './components/DogListing';

const dogData = {
  name: "Snowy",
  breed: "Pomeranian",
  age: 9,
  description: "A lovely and fluffy Pomeranian with a lot of energy.",
  healthStatus: HealthStatus.Good, 
  imageUrl: "logo512.png" 
}

function App() {
  return (
    <div className="App">
      <Header username="Reinardus" />
      <DogListing 
        name={dogData.name}
        breed={dogData.breed}
        age={dogData.age}
        description={dogData.description}
        healthStatus={dogData.healthStatus}
        imageUrl={dogData.imageUrl}
        />
    </div>
  );
}

export default App;
