import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';

function Errors({ errors }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let clearError = null;
    if (errors.length > 0) {
      clearError = setTimeout(() => dispatch(clearErrors()), 2500);
    }
    return () => clearTimeout(clearError);
  }, [errors, history, dispatch]);

  return (
    <ul>
      {errors?.length > 0 && (
        <div className='errors--wrapper'>
          <FontAwesomeIcon icon={faTimes} style={{ color: '#ff0033' }} />
          {errors.map((error, idx) => (
            <li key={`${error}-${idx}`}>{error}</li>
          ))}
        </div>
      )}
    </ul>
  );
}

export default Errors;
