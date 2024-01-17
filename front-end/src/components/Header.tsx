import React from 'react';
import '../stylesheets/main.css'; 
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/authReducer';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogoClick = () => {
    navigate(`/main`);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className="flex-row" id="main-header">
        <img className="site-logo" src="/pawdopt-logo.png" onClick={handleLogoClick}/>
        <h1 className="site-heading">Welcome to PawDopt</h1>
        {isLoggedIn ? (
          <button className="btn secondary-btn" onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button className="btn secondary-btn" onClick={handleSignInClick}>Sign in</button>
        )}
      </div>
    </header>
  );
};

export default Header;
