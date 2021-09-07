import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login} from '../../actions/sessionsActions';

function Signup() {
  const [signupCreds, setCreds] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/onboarding',
      state: {
        ...signupCreds,
      },
    });
  };

  const demoSubmit = () => {
    dispatch(
      login({
        email: 'demo_user@demo.com',
        password: 'demodemodemo',
      }),
    );
  };

  return (
    <section className='login--section'>
      <div className='login--wrapper'>
        <h2>Sign up with Apple, Facebook or Google</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email' className='login--label'>
            Email
          </label>
          <input
            autoComplete='true'
            autoFocus
            type='email'
            name='email'
            id='email'
            onChange={(e) => setCreds({...signupCreds, email: e.target.value})}
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
            onChange={(e) =>
              setCreds({...signupCreds, password: e.target.value})
            }
            required
            value={signupCreds.password}
          />

          <button type='submit' className='auth--btn'>
            Sign Up
          </button>
        </form>

        <button className='auth--btn demo--btn' onClick={demoSubmit}>
          Demo User
        </button>
      </div>
    </section>
  );
}

export default Signup;
