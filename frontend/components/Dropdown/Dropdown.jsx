import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ list, title, handleClick = (e) => e }) {
  const [isOpen, setIsOpen] = useState(null);
  const [dropDownTitle, setDropDownTitle] = useState(list[0].key);

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
            {list.map(({ key, text, value }, i) => (
              <button
                type='button'
                className='dropdown--item'
                key={i}
                onClick={() => {
                  handleClick(value);
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
    </>
  );
}

export default Dropdown;
