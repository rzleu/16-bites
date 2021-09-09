import React from 'react';
import AppleStore from 'Images/apple_store.svg';
import GooglePlay from 'Images/google-play-badge.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faEnvelope, faCopyright} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer>
      <div className='footer--wrapper'>
        <div>
          <h4>Company</h4>
          <ul>
            <li>Newsroom</li>
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Community</h4>
          <ul>
            <li>Popular photos</li>
            <li>Editors' Choice</li>
            <li>Resource Hub</li>
            <li>Quests</li>
            <li>Portfolio</li>
            <li>Groups</li>
          </ul>
        </div>

        <div>
          <h4>Licensing</h4>
          <ul>
            <li>About Licensing</li>
            <li>Become a Contributor</li>
            <li>Submission requirements</li>
            <li>Content types</li>
            <li>Distribution</li>
          </ul>
        </div>

        <div>
          <h4>Social</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
              <a
                target='_blank'
                href='https://www.facebook.com/richardleung13/'
              >
                Facebook
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
              <a target='_blank' href=''>
                Twitter
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
              <a
                target='_blank'
                href='https://www.linkedin.com/in/richardzleung/'
              >
                Linkedin
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a target='_blank' href='mailto:richardzleung@gmail.com'>
                Email
              </a>
            </li>
          </ul>
        </div>

        <span>
          <h4 className='footer--devices-header'>Download the app</h4>
          <div className='splash--badges'>
            <a href='#'>
              <GooglePlay />
            </a>
            <a href='#'>
              <AppleStore />
            </a>
          </div>
        </span>
      </div>
      <div className='footer--end'>
        <h4>
          <FontAwesomeIcon icon={faCopyright} style={{marginRight: '8px'}} />
          16 bites
        </h4>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Support</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
