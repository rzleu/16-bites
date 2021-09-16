import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/sessionsActions';
import Errors from '../Errors';

function Login() {
  const errors = useSelector((state) => state.errors);

  const history = useHistory();
  const [loginCreds, setCreds] = useState({
    login: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
    if (errors && errors.length > 0) {
      history.push('/');
    }
  };
  const demoSubmit = () => {
    dispatch(
      login({
        login: 'demo_user@demo.com',
        password: 'demodemodemo',
      }),
    );
    history.push('/');
  };

  return (
    <section className='login--section'>
      <Errors errors={errors} />
      <div className='login--wrapper'>
        <h2 className='auth--header' style={{ marginBottom: '10px' }}>
          Log in to 16 bites
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='login_user' className='login--label'>
            Email or Username*
          </label>
          <input
            autoComplete='true'
            type='username'
            name='login_user'
            id='login_user'
            onChange={(e) => setCreds({ ...loginCreds, login: e.target.value })}
            required
            value={loginCreds.login}
          />
          <label htmlFor='current-password' className='login--label'>
            Password*
          </label>
          <input
            autoComplete='current-password'
            type='password'
            name='password'
            id='current-password'
            onChange={(e) => setCreds({ ...loginCreds, password: e.target.value })}
            required
            value={loginCreds.password}
          />
          <button type='submit' className='auth--btn' style={{ margin: '15px 0' }}>
            Log In
          </button>
        </form>
        <div className='demo--login-or'>or login with</div>

        <button type='button' className='auth--btn demo--btn' onClick={demoSubmit}>
          Demo User
        </button>
        <div style={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link to='/signup' className='signup--redirect'>
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
