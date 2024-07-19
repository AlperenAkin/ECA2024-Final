import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
    <br /><br />
    <h2>Login to Your ECA2024 Account</h2>
    <br />
    <form onSubmit={handleLogin}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input id="exampleInputEmail1" type="email" class="form-control" 
        placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" 
        placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    <br />
    <p>Don't have an ECA2024 account? <Link to="/signup">Sign Up</Link></p>
</div>
  );
};


export default Login;

