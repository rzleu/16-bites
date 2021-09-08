import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function index({errors}) {
  return (
    <ul>
      {errors.length > 0 && (
        <div className='errors--wrapper'>
          <FontAwesomeIcon icon={faTimes} style={{color: '#ff0033'}} />
          {errors.map((error, idx) => (
            <li key={`${error}-${idx}`}>{error}</li>
          ))}
        </div>
      )}
    </ul>
  );
}

export default index;
