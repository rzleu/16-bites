import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../Dropdown';
import { categoryOptions } from '../../constants';
import { createPost } from '../../utils/postApi';

function UploadForm({ photo, resetPhoto }) {
  const currUser = useSelector((state) => state.session.id);

  const [photoFields, setPhotoFields] = useState({
    title: photo.name.split('.')[0],
    description: '',
    photo: photo,
    // photoUrl: photo.url,
    location: '',
    keywords: '',
    category: '',
    user_id: currUser,
  });
  const [showCancel, setShowCancel] = useState(false);

  const handleChange = (label, val) => {
    setPhotoFields({ ...photoFields, [label]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...photoFields,
      user_id: currUser,
    };
    console.log({ post });
    createPost(post);
  };

  return (
    <div className='photo--edit-form'>
      {/* LEFT BAR */}
      <div>Insert photo here</div>

      {/* RIGHTBAR */}
      <div className='upload--rightbar'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='upload--title'>Title</label>
          <input
            type='text'
            id='upload--title'
            onChange={(e) => handleChange('title', e.target.value)}
            value={photoFields.title}
          />

          <label htmlFor='upload--description'>Description</label>
          <input
            type='text'
            id='upload--description'
            onChange={(e) => handleChange('description', e.target.value)}
            value={photoFields.description}
          />

          <label htmlFor='upload--location'>Location</label>
          <input
            type='text'
            id='upload--location'
            onChange={(e) => handleChange('location', e.target.value)}
            value={photoFields.location}
          />

          <Dropdown
            list={categoryOptions}
            title='Categories'
            handleClick={(category) => handleChange('category', category)}
          />

          <button type='reset' onClick={() => setShowCancel((old) => !old)}>
            Cancel
          </button>
          <button type='submit'>Upload</button>

          {/* RESET FORM MODAL */}
          {showCancel && (
            <>
              <div className='reset-modal--wrapper'>
                <div className='reset-modal--content'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    size='3x'
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  <h3>You have unsaved changes</h3>
                  <p>
                    Are you sure you want to leave without saving? Your changes will
                    be lost.
                  </p>
                  <button
                    onClick={resetPhoto}
                    className='btn--reverse-color started--btn photo--leave-btn'
                  >
                    Leave without saving
                  </button>
                  <button
                    onClick={() => setShowCancel((old) => !old)}
                    className='photo--cancel-btn'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default UploadForm;
