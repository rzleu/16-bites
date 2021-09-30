import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import classNames from 'classnames';
import { login } from '../../actions/sessionsActions';
import Errors from '../Errors';
import { checkEmailUniquess } from '../../utils/sessionApi';

function Signup() {
  const [signupCreds, setCreds] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const clearErrors = setTimeout(() => {
      setErrors({});
    }, 3500);
    return () => {
      clearTimeout(clearErrors);
    };
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!signupCreds.email.length) {
      setErrors({ ...errors, email: 'This field is required' });
      if (!signupCreds.password.length) {
        setErrors({
          ...errors,
          password: 'this field is required',
          email: 'this field is required',
        });
      }
      return;
    }

    if (!signupCreds.email.includes('@')) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
    }

    if (signupCreds.password.length < 8) {
      setErrors({ ...errors, password: 'Password must be 8 characters long' });
      return;
    }

    checkEmailUniquess(signupCreds.email)
      .then(() => {
        history.push({
          pathname: '/onboarding',
          state: {
            ...signupCreds,
          },
        });
      })
      .fail((err) => {
        setErrors({ ...errors, email: err.responseJSON });
      });
  };

  const demoSubmit = () => {
    dispatch(
      login({
        login: 'demo_user@demo.com',
        password: 'demo_password',
      }),
    );
    history.push('/');
  };

  return (
    <section className='login--section'>
      <div className='login--wrapper'>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email' className='login--label'>
            Email
          </label>
          <input
            autoComplete='true'
            className={classNames({ invalid: errors.email })}
            type='text'
            name='email'
            id='email'
            onChange={(e) => setCreds({ ...signupCreds, email: e.target.value })}
            value={signupCreds.email}
          />
          <span className='error-text'>{errors.email}</span>

          <label htmlFor='new-password' className='login--label'>
            Password
          </label>
          <input
            autoComplete='new-password'
            className={classNames({ invalid: errors.password })}
            type='password'
            name='password'
            id='new-password'
            placeholder='(minimum 8 characters)'
            onChange={(e) => setCreds({ ...signupCreds, password: e.target.value })}
            value={signupCreds.password}
          />
          <span className='error-text'>{errors.password}</span>

          <button type='submit' className='auth--btn' style={{ marginTop: '5px' }}>
            Sign Up
          </button>
        </form>
        <div className='demo--login-or'>or login with</div>
        <button type='button' className='auth--btn demo--btn' onClick={demoSubmit}>
          Demo User
        </button>
        <div>
          Already have an account?{' '}
          <Link to='/login' className='signup--redirect'>
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
