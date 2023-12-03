import React from 'react';
import '../App.css'; 

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header>
      <div className="flex-row" id="main-header">
        <img className="site-logo" src="pawdopt-logo.png" />
        <h1 className="site-heading">Welcome, {username}</h1>
        <button className="btn secondary-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
