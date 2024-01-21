import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authReducer';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/loginScreen.css';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authValid, setAuthValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault(); 

    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    setUsername('');
    setPassword('');
    
    if (response.status == 200) {
      setAuthValid(true);
      dispatch(loginSuccess());
      navigate("/main")
    } else {
      setAuthValid(false);
    }
  };

  const handleCancel = () => {
    navigate(`/main`); 
  }

  return (
    <div className='login-screen'>
      <h1>Login</h1>  
      <form onSubmit={handleLogin}>
        <div className='flex-column'>
        <label>Username</label>
        <input 
          type="text"
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Username" 
          required
        />
        </div>
        <div className='flex-column'>
            <label>Password</label>
            <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
            required
            />
            {!authValid && <p className="error-message">Invalid username or password.</p>}
         </div>
         <div className='flex-column'>
            <button className='login-btn' type="submit">Login</button>
            <button className='cancel-login-btn' onClick={handleCancel}>Cancel</button>
         </div>
        
      </form>
    </div>
  );
};

export default LoginComponent;
