import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import Logo from 'Images/logo.svg';
import { logout } from '../../actions/sessionsActions';
import useOutsideClick from '../../hooks/useOutsideClick';

const navLinks = [
  {
    path: 'https://github.com/rzleu',
    text: 'Github',
  },
  {
    path: 'https://www.linkedin.com/in/richardzleung/',
    text: 'LinkedIn',
  },
  {
    path: 'https://angel.co/u/richardzleung',
    text: 'AngelList',
  },
];

const loggedinLinks = [
  {
    text: 'Profile',
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
  const id = useSelector((state) => state.session.id);
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
                  <a className='nav--link' href={path} key={i} target='_blank'>
                    {text}
                  </a>
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
                  <CSSTransition
                    in={isOpen}
                    timeout={1000}
                    classNames='navbar-ani'
                    unmountOnExit
                  >
                    <ul className='nav--dropdown'>
                      {loggedinLinks.map(({ path = `/user/${id}`, text }, i) => (
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
                  </CSSTransition>
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
