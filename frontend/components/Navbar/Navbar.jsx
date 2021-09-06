import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Logo from 'Images/logo.svg';

export default function Navbar() {
  const currUserId = useSelector((state) => state.session.id);
  console.log(currUserId);
  return (
    <div className='nav--wrapper'>
      <nav className='nav--bar'>
        <div className='nav--left'>
          <ul>
            <li className='logo nav--item logo--wrapper'>
              <Link to='/'>
                <Logo className='logo' />
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
          {!currUserId && (
            <>
              <Link to='/login' className='login-nav-btn'>
                Log In
              </Link>
              <Link to='/signup' className='signup-nav-btn'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
