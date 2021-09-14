import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from 'Images/logo.svg';
import { logout } from '../../actions/sessionsActions';
import useOutsideClick from '../../hooks/useOutsideClick';

const navLinks = [
  {
    path: '/discover',
    text: 'Discover',
  },
  {
    path: '/licensing',
    text: 'Licensing',
  },
  {
    path: '/resource_hub',
    text: 'Resource',
  },
  {
    path: '/licensing/distributions',
    text: 'Memberships',
  },
  {
    path: '/quests',
    text: 'Quests',
  },
  {
    path: '/blog',
    text: 'Blog',
  },
];

const loggedinLinks = [
  {
    path: '/profile',
    text: 'Profile',
  },
  {
    path: '/liked',
    text: 'Liked photos',
  },
  {
    path: '/manage',
    text: 'Photo Manager',
  },
  {
    path: '/',
    text: 'Logout',
  },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(null);
  const clickRef = useRef();
  // @ts-ignore
  const currUserId = useSelector((state) => state.session.id);
  useOutsideClick(clickRef, () => setIsOpen(false));

  const handleLogout = () => {
    dispatch(() => dispatch(logout()));
    history.push('/');
  };
  return (
    <>
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
              {navLinks.map(({ path, text }, i) => (
                <li className='nav--item' key={i}>
                  <Link className='nav--link' to={path} key={i}>
                    {text}
                  </Link>
                </li>
              ))}
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
                  ref={clickRef}
                  className='profile-btn'
                  type='button'
                  onClick={() => setIsOpen((old) => !old)}
                  style={{
                    marginBottom: '-2px',
                    background: 'transparent',
                    right: '10px',
                  }}
                >
                  <FontAwesomeIcon icon={faUser} size='2x' />
                  {isOpen && (
                    <ul className='nav--dropdown'>
                      {loggedinLinks.map(({ path, text }, i) => (
                        <div key={i}>
                          <Link
                            to={path}
                            onClick={text === 'Logout' ? () => handleLogout() : null}
                          >
                            {text}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  )}
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
    </>
  );
}
