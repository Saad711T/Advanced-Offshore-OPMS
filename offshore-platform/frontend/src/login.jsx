import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username,
        password
      });
      localStorage.setItem('access', res.data.access);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Offshore Platform Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


export default login;
