import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Logo from 'Images/logo.svg';
import { logout } from '../../actions/sessionsActions';

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
                type='button'
                onClick={() => handleLogout()}
                className='nav--button signup-nav-btn'
                style={{ marginRight: '10px' }}
              >
                Log out
              </button>

              <Link
                to='/manage/upload'
                type='button'
                className='nav--button upload--btn'
              >
                <FontAwesomeIcon icon={faArrowUp} className='btn--icon' />
                <span>Upload</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
