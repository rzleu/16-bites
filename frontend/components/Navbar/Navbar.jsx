import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {logout} from '../../actions/sessionsActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import Logo from 'Images/logo.svg';

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  // @ts-ignore
  const currUserId = useSelector((state) => state.session.id);

  function handleLogout() {
    dispatch(() => dispatch(logout()));
    history.push('/');
  }

  return (
    <div className='nav--wrapper'>
      <nav className='nav--bar'>
        <div className='nav--left'>
          <ul>
            <li className='nav--item logo--wrapper'>
              <Link to='/' className='logo'>
                <Logo
                  style={{
                    height: 'inherit',
                    position: 'relative',
                    bottom: '10px',
                  }}
                />
              </Link>
            </li>

            <li className='nav--item'>
              <Link className='nav--link' to='/discover'>
                Discover
              </Link>
            </li>
            <li className='nav--item'>
              <Link className='nav--link' to='/licensing'>
                Licensing
              </Link>
            </li>
            <li className='nav--item'>
              <Link className='nav--link' to='/resource_hub'>
                Resources
              </Link>
            </li>
            <li className='nav--item'>
              <Link className='nav--link' to='/licensing/distributions'>
                Memberships
              </Link>
            </li>
            <li className='nav--item'>
              <Link className='nav--link' to='/quests'>
                Quests
              </Link>
            </li>
            <li className='nav--item'>
              <Link className='nav--link' to='/blog'>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className='nav--right'>
          {!currUserId ? (
            <>
              <Link to='/login' className='login-nav-btn'>
                Log In
              </Link>
              <Link to='/signup' className='signup-nav-btn'>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => handleLogout()}
                className='nav--button signup-nav-btn'
              >
                Log out
              </button>

              <button className='nav--button upload--btn'>
                <FontAwesomeIcon icon={faArrowUp} className='btn--icon' />
                <span>Upload</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
