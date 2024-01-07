import React from 'react';
import '../stylesheets/main.css'; 
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate(`/main`);
  };

  return (
    <header>
      <div className="flex-row" id="main-header">
        <img className="site-logo" src="/pawdopt-logo.png" onClick={handleLogoClick}/>
        <h1 className="site-heading">Welcome to PawDopt</h1>
        <button className="btn secondary-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
