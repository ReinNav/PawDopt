import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dog } from '../types/Dog';
import { HealthStatus, getDesc } from '../other/HealthStatus';
import { createDog } from '../API';
import '../stylesheets/formStyles.css';
import '../stylesheets/createScreen.css';

const CreateDogScreen: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Dog>({
    id: '',
    name: '',
    age: '',
    breed: '',
    description: '',
    healthStatus: HealthStatus.Good,
    image: undefined
  });

  const healthStatusOptions = Object.values(HealthStatus).map(status => ({
    value: status,
    label: getDesc(status as HealthStatus)
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const newDog = await createDog(formData, file);
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
        <div className='flex-column'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className='flex-column'>
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className='flex-column'>
          <label>Breed:</label>
          <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
        </div>
        <div className='flex-column'>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
          <div className='flex-column'>
          <label>Health Status</label>
          <select
            name="healthStatus"
            value={formData.healthStatus}
            onChange={handleChange}
          >
            {healthStatusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <div className='flex-row btn-container'>
          <button className='cancel-btn'>cancel</button>
          <button type="submit" className='btn submit-btn'>Add Dog</button>
        </div>
        
      </form>
    </div>
  );
};


export default CreateDogScreen;
