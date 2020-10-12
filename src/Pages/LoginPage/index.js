import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    history.push('/dashboard');
  };
  return (
    <main>
      <Link to='/'>Login</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </main>
  );
};

export default LoginPage;
