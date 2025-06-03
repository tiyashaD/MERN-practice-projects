import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authStyles.css';


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //login function
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      alert('Login Data' + email + ' ' + password + ' ' + username)
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className='fa-solid fa-circle-user'></i>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder='Enter your email' value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="username" className="form-control" placeholder='Enter your username' value={username} onChange={ (e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder='Enter your password' value={password} onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-bottom">
          <p className='text-center'>
            Already a user? please
            <Link to="/login">Login</Link>
          </p>
          <button type="submit" className='login-btn' onClick={handleSubmit}> REGISTER </button>
        </div>
      </div>
    </div>
  )
}

export default Register