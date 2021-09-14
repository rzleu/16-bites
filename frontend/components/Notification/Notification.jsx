import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Notification({ message }) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    let clearNotification;
    if (message && message.length > 0) {
      clearNotification = setTimeout(() => setIsOpen(false), 2500);
    }
    return () => clearTimeout(clearNotification);
  }, []);
  console.log({ message });
  return (
    <ul>
      {isOpen && (
        <div
          className='errors--wrapper'
          style={{ color: '#5cb85c ', backgroundColor: 'var(--veryDarkGrey)' }}
        >
          <FontAwesomeIcon icon={faCheckCircle} />
          {message}
        </div>
      )}
    </ul>
  );
}

export default Notification;
