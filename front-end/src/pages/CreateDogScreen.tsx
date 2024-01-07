import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dog } from '../types/Dog';
import { HealthStatus, getDesc } from '../other/HealthStatus';
import { createDog } from '../API';
import '../stylesheets/detailScreen.css';

const CreateDogScreen: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Dog>({
    id: '',
    name: '',
    age: '',
    breed: '',
    description: '',
    healthStatus: HealthStatus.Good,
    imageName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files ? e.target.files[0] : null;

    if (selectFile) {
        setFormData(prevFormData => ({
          ...prevFormData,
          imageName: selectFile.name
        }));
      }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const newDog = await createDog(formData);
      if (newDog) {
        console.log('Dog added:', newDog);
        navigate(`/main`); 
      } else {
        console.error('Failed to add the dog');
      }
    } catch (error) {
      console.error('Error adding dog: ', error);
    }
  };

  return (
    <div className="create-dog-screen">
      <h1>Add New Dog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Breed:</label>
          <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Health Status:</label>
          <select name="healthStatus" value={formData.healthStatus} onChange={handleChange}>
            {Object.values(HealthStatus).map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
};

export default CreateDogScreen;
