import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDog } from '../domain/hooks';
import '../stylesheets/logoutConfirmScreen.css';
import '../stylesheets/main.css';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authReducer';


const LogoutConfirmScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout(false));
    navigate('/main')
  };

  const handleCancel = () => {
    navigate(`/main`); 
  }
  return (
    <div className="logout-confirm-container">
      <p>Are you sure you want to logout?</p>
      <div className="flex-row button-container">
        <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        <button onClick={handleLogout} className="btn confirm-logout-btn">Yes, Logout</button>
      </div>
    </div>
  );
};



export default LogoutConfirmScreen;
