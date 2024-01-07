import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import { Dog } from '../types/Dog';
import { HealthStatus, getDesc } from '../other/HealthStatus';
import { updateDog } from '../API';
import '../stylesheets/detailScreen.css';

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
    imageName: ''
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

  if (state === 'loading') return <div>Loading...</div>;
  if (state === 'error') return <div>Error: {error?.message}</div>;
  if (!dog) return <div>No dog found</div>;

  return (
    <div className="edit-screen">
      <h1>Edit Dog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Health Status:</label>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditDogScreen;
