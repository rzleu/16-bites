import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Notification({ message }) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    let clearNotification;
    if (message && message.length > 0) {
      clearNotification = setTimeout(() => setIsOpen(false), 2500);
    }
    return () => clearTimeout(clearNotification);
  }, []);

  return (
    <ul>
      {isOpen && (
        <div className='errors--wrapper'>
          <FontAwesomeIcon icon={faTimes} style={{ color: '#039487' }} />
          {message}
        </div>
      )}
    </ul>
  );
}

export default Notification;
