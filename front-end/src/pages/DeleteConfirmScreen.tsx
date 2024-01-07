import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import '../stylesheets/deleteConfirmScreen.css';
import '../stylesheets/main.css';
import { deleteDog } from '../API';


const DeleteConfirmScreen: React.FC = () => {
  const { dogId } = useParams<{ dogId: string }>();
  const { dog, state } = useDog(dogId);
  const navigate = useNavigate();

  const handleConfirmDelete = async () => {
    try {
        if (dogId) {
            await deleteDog(dogId);
        }
        navigate('/');
      } catch (error) {
        console.error(`Error deleting dog with id ${dogId}: `, error);
        alert('Unexpected error when trying to delete. Please try again.')
      }
  };

  const handleCancel = () => {
    navigate(`/dogs/${dogId}/detail`); // navigate back to detail
  };

  if (state === 'loading') return <p className='state-msg'>Loading...</p>;
  if (state === 'error' || !dog) return <p className='state-msg-error'>Error fetching dog details.</p>;

  return (
    <div className="delete-confirm-container">
      <p>Are you sure you want to delete {dog.name}'s listing and all it's information? This action cannot be undone!</p>
      <div className="flex-row button-container">
        <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        <button onClick={handleConfirmDelete} className="btn confirm-delete-btn">Yes, Delete</button>
      </div>
    </div>
  );
};

export default DeleteConfirmScreen;
