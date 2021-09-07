import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signup} from '../../actions/sessionsActions';
import {useHistory} from 'react-router-dom';

function Onboarding(props) {
  const {push, location} = useHistory();
  const dispatch = useDispatch();
  const [signupCreds, setCreds] = useState({
    fname: '',
    lname: '',
    // generate random default username
    username: '_' + Math.random().toString(36).substr(2, 9),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      ...signupCreds,
      ...location.state,
    };
    // console.log(request);
    dispatch(signup(request));
    push('/');
  };

  return (
    <section className='login--section'>
      <div className='login--wrapper'>
        <h2>Welcome to 500px. Let’s get to know you a little.</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='fname' className='login--label'>
            First name
          </label>
          <input
            autoComplete='given-name'
            autoFocus
            type='fname'
            name='fname'
            id='fname'
            onChange={(e) => setCreds({...signupCreds, fname: e.target.value})}
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
            onChange={(e) => setCreds({...signupCreds, lname: e.target.value})}
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
            onChange={(e) =>
              setCreds({...signupCreds, username: e.target.value})
            }
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
