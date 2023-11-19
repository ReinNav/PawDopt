import React from 'react';
import '../App.css'; 

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header>
      <div className="flex-row" id="main-header">
        <img src="logo192.png" />
        <h1>Welcome, {username}!</h1>
        <button className="btn secondary-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
