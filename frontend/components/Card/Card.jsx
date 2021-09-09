import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPodcast,
  faWifi,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

function Card({image, title, tags, footerTitle}) {
  return (
    <aside className='card--wrapper-one '>
      <div className='img--wrapper'>
        <img src={image} alt='img' style={{width: '316px', height: '196px'}} />
      </div>
      <div className='card--content'>
        <h2 className='card--title'>{title}</h2>
        <ul>
          {tags.map((tag, i) => (
            <div key={i}>
              <FontAwesomeIcon
                icon={faPodcast}
                style={{marginRight: '5px', display: 'inline-block'}}
              />
              <li key={i} style={{marginRight: '5px', display: 'inline-block'}}>
                {tag}
              </li>
            </div>
          ))}
        </ul>
        <div className='card--footer'>
          <FontAwesomeIcon icon={faUser} style={{marginRight: '5px'}} />
          {footerTitle}
        </div>
      </div>
    </aside>
  );
}

export default Card;
