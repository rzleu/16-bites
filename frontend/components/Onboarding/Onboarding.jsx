import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, RECEIVE_CURR_USER } from '../../actions/sessionsActions';
import { useHistory } from 'react-router-dom';
import Errors from '../Errors';

function Onboarding(props) {
  const { push, location } = useHistory();
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [signupCreds, setCreds] = useState({
    fname: '',
    lname: '',
    // generate random default username
    username: location.state.email.split('@')[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      ...signupCreds,
      ...location.state,
    };

    dispatch(signup(request));
    if (errors.length > 0) {
      setTimeout(
        () =>
          dispatch({
            type: RECEIVE_CURR_USER,
          }),
        1000,
      );
    } else {
      push('/');
    }
  };

  return (
    <section className='login--section'>
      <div className='login--wrapper'>
        <h2>Welcome to 16 bites. Let’s get to know you a little.</h2>
        <form onSubmit={handleSubmit}>
          <Errors errors={errors} />
          <label htmlFor='fname' className='login--label'>
            First name
          </label>
          <input
            autoComplete='given-name'
            autoFocus
            type='fname'
            name='fname'
            id='fname'
            onChange={(e) => setCreds({ ...signupCreds, fname: e.target.value })}
            required
            value={signupCreds.fname}
          />

          <label htmlFor='lname' className='login--label'>
            Last name
          </label>
          <input
            autoComplete='family-name'
            autoFocus
            type='lname'
            name='lname'
            id='lname'
            onChange={(e) => setCreds({ ...signupCreds, lname: e.target.value })}
            required
            value={signupCreds.lname}
          />

          <label htmlFor='username' className='login--label'>
            Username
          </label>
          <input
            autoComplete='username'
            type='username'
            name='username'
            id='username'
            onChange={(e) => setCreds({ ...signupCreds, username: e.target.value })}
            required
            value={signupCreds.username}
          />

          <button type='submit' className='auth--btn'>
            Next
          </button>
        </form>
      </div>
    </section>
  );
}

export default Onboarding;
