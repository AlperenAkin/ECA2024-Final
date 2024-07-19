import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email: user.email
      });

      alert('User created successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <br /><br />
      <h2>Sign Up and Join the ECA2024 Family!</h2>
      <br />
      <form onSubmit={handleSignUp}>

        <div class="form-group">
          <label for="signup-firstname">First Name</label>
          <input id="signup-firstname" type="text" class="form-control" 
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required/>  
        </div>

        <div class="form-group">
          <label for="signup-lastname">Last Name</label>
          <input type="text" class="form-control" id="signup-lastname" 
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required/>
        </div>

        <div class="form-group">
          <label for="signup-email">Email</label>
          <input type="email" class="form-control" id="signup-email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        </div>

        <div class="form-group">
          <label for="signup-password">Password</label>
          <input type="password" class="form-control" id="signup-password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    <br />
    <p>Already an ECA2024 account? <Link to="/login">Login</Link></p>
  </div>
  );
};

export default SignUp;


