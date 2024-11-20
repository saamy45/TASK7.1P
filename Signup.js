import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore'; 
import { auth, firestore } from './firebase'; 
import './style.css'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    setError(null);  // Clear previous errors

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      console.log('User created with UID:', userId); 

      
      await setDoc(doc(firestore, 'users', userId), {
        name: name,
        lastName: lastName,
        email: email,
      });

      console.log('User data successfully written to Firestore'); // Log Firestore success

      // Redirect to the login page after successful sign-up
      window.location.href = '/login';
    } catch (err) {
      // Log and display more specific error messages
      console.error('Sign-up error:', err.message, err.code);
      setError(`Sign-up error: ${err.message}`);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create a DEV@Deakin Account</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      />
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
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
      />
      <button onClick={handleSignup}>Create</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;
