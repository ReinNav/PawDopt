import React from 'react';
import '../stylesheets/main.css'; 

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex-row" id="main-header">
        <img className="site-logo" src="/pawdopt-logo.png" />
        <h1 className="site-heading">Welcome to PawDopt</h1>
        <button className="btn secondary-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
