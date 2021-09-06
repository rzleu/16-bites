import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/sessionsActions';

function Login() {
  const [loginCreds, setCreds] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };

  return (
    <div className='login--wrapper'>
      <h2>Log in to 500px</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email_user' className='login--label'>
          Email or Username*
        </label>
        <input
          autoComplete='true'
          autoFocus
          type='email'
          name='email_user'
          id='email_user'
          onChange={(e) => setCreds({...loginCreds, email: e.target.value})}
          required
          value={loginCreds.email}
        />

        <label htmlFor='current-password' className='login--label'>
          Password*
        </label>
        <input
          autoComplete='current-password'
          type='text'
          name='password'
          id='current-password'
          onChange={(e) => setCreds({...loginCreds, password: e.target.value})}
          required
          value={loginCreds.password}
        />

        <button type='submit' className='auth--btn'>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
