import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className='nav--left'>
        <ul>
          <li>
            <Link>Logo</Link>
          </li>

          <li className="nav--item">
            <Link className="nav--link">Discover</Link>
          </li>
          <li className="nav--item">
            <Link className="nav--link">Licensing</Link>
          </li>
          <li className="nav--item">
            <Link className="nav--link">Resouces</Link>
          </li>
          <li className="nav--item">
            <Link className="nav--link">Memberships</Link>
          </li>
          <li className="nav--item">
            <Link className="nav--link">Quests</Link>
          </li>
          <li className="nav--item">
            <Link className="nav--link">Blog</Link>
          </li>
        </ul>
      </div>

      <div className='nav--right'>
        <Link to='/login' className='nav--button'>Log In</Link>
        <Link to='/signup' className='nav-button signup-btn'>Sign Up</Link>
      </div>
    </nav>
  )
}
