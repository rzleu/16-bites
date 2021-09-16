import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '../../hooks/useOutsideClick';

function Dropdown({ list, title, handleClick = (e) => e }) {
  const [isOpen, setIsOpen] = useState(null);
  const [dropDownTitle, setDropDownTitle] = useState(list[0].key);
  const clickRef = useRef();

  useOutsideClick(clickRef, () => setIsOpen(false));
  return (
    <>
      <h2>{title}</h2>
      <div className='dropdown--wrapper'>
        <button
          ref={clickRef}
          type='button'
          className='dropdown--btn upload--input'
          onClick={() => setIsOpen(!isOpen)}
        >
          {dropDownTitle}
          <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />
        </button>
        {isOpen && (
          <ul
            className='dropdown--list upload--input'
            style={{ border: '1px solid rgb(215, 216, 219' }}
          >
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
