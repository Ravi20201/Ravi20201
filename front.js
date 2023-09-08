// Registration.js
import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { email, password });
      // Handle successful registration
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registration;
