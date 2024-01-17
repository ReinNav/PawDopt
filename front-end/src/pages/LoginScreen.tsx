import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authReducer';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault(); 

    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
