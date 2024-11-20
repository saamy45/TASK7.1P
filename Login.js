import React, { useState } from 'react';
import { auth } from './firebase'; 
import './style.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      
      window.location.href = '/home';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container"> 
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="btn" onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      <button className="btn" onClick={() => window.location.href = '/signup'}>Sign Up</button>
    </div>
  );
};

export default Login;
