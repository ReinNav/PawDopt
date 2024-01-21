import React from 'react';
import '../stylesheets/main.css'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginStatus } from '../redux/store';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(loginStatus);

  const handleLogoClick = () => {
    navigate(`/main`);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    navigate('/logoutconfirm');
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
