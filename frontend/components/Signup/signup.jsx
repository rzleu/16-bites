import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/sessionsActions';
import Errors from '../Errors';
import { checkEmailUniquess } from '../../utils/sessionApi';

function Signup() {
  const [signupCreds, setCreds] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const clearErrors = setTimeout(() => {
      setErrors('');
    }, 2000);
    return () => {
      clearTimeout(clearErrors);
    };
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        setErrors(err.responseJSON);
      });
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
      <div className='login--wrapper'>
        <h2>Sign up with Apple, Facebook or Google</h2>
        <Errors errors={errors} />
        <form onSubmit={handleSubmit}>
          <label htmlFor='email' className='login--label'>
            Email
          </label>
          <input
            autoComplete='true'
            type='email'
            name='email'
            id='email'
            onChange={(e) => setCreds({ ...signupCreds, email: e.target.value })}
            required
            value={signupCreds.email}
          />

          <label htmlFor='new-password' className='login--label'>
            Password
          </label>
          <input
            autoComplete='new-password'
            type='password'
            name='password'
            id='new-password'
            placeholder='(minimum 8 characters)'
            onChange={(e) => setCreds({ ...signupCreds, password: e.target.value })}
            required
            value={signupCreds.password}
          />

          <button type='submit' className='auth--btn'>
            Sign Up
          </button>
        </form>

        <button type='button' className='auth--btn demo--btn' onClick={demoSubmit}>
          Demo User
        </button>
      </div>
    </section>
  );
}

export default Signup;
