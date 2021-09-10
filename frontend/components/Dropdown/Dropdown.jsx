import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ list, title, handleClick = (e) => e }) {
  const [isOpen, setIsOpen] = useState(null);
  const [dropDownTitle, setDropDownTitle] = useState(list[0].key);

  useEffect(() => {
    handleClick(dropDownTitle);
  }, [dropDownTitle, handleClick]);

  return (
    <>
      <h2>{title}</h2>
      <div className='dropdown--wrapper'>
        <button
          type='button'
          className='dropdown--btn'
          onClick={() => setIsOpen(!isOpen)}
        >
          {dropDownTitle}
          <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />
        </button>
        {isOpen && (
          <ul className='dropdown--list'>
            {list.map(({ key, text, value }) => (
              <button
                type='button'
                className='dropdown--item'
                key={key}
                onClick={() => {
                  setDropDownTitle(value);
                  setIsOpen(null);
                }}
              >
                {text}
                {text === dropDownTitle && (
                  <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '5px' }} />
                )}
              </button>
            ))}
          </ul>
        )}
      </div>
      <div style={{ height: '1000px', width: '100%' }} />
    </>
  );
}

export default Dropdown;
