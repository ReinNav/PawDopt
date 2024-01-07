import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import { Dog } from '../types/Dog';
import { HealthStatus, getDesc } from '../other/HealthStatus';
import { updateDog } from '../API';
import '../stylesheets/formStyles.css';
import '../stylesheets/main.css';
import '../stylesheets/editScreen.css';

const EditDogScreen: React.FC = () => {
  const { dogId } = useParams<{ dogId: string }>();
  const { dog, state, error } = useDog(dogId);
  const navigate = useNavigate();

  // Form state
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

  // load dog data
  useEffect(() => {
    if (dog) {
      setFormData({ ...dog });
    }
  }, [dog]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleCancel = () => {
    navigate(`/dogs/${formData.id}/detail`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const updatedDog = await updateDog(formData);
      if (updatedDog) {
        console.log('Dog updated:', updatedDog);
        navigate(`/dogs/${formData.id}/detail`); 
      } else {
        console.error('Failed to update the dog');
      }
    } catch (error) {
      console.error('Error updating dog: ', error);
    }
  };

  if (state === 'loading') return <p className="state-msg">Loading items…</p>;
  if (state === 'error') return <p className="state-msg">Error in fetching dog information.<br></br>Please try reloading the page or try again later.</p>;

  return (
    <div className="edit-screen">
      <h1>Edit {formData.name}'s information</h1>
      <form onSubmit={handleSubmit} className='edit-form'>
        <div className='flex-column'>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex-column'>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className='flex-column'>
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </div>
        <div className='flex-column'>
          <label>Description</label>
          <textarea
            name="description"
            rows={5}
            cols={50}
            value={formData.description}
            onChange={handleChange}
          />
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
        <div className='flex-row btn-container'>
          <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
          <button type="submit" className='btn submit-btn'>Save Changes</button>
        </div>
        
      </form>
    </div>
  );
};

export default EditDogScreen;
