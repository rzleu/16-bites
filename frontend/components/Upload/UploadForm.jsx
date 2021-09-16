import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faImages } from '@fortawesome/free-solid-svg-icons';
import {
  deletePost,
  updatePost as updatePostAction,
} from '../../actions/postActions';

import Dropdown from '../Dropdown';
import { categoryOptions } from '../../constants';
import * as PostAPiUtils from '../../utils/postApi';
import Notification from '../Notification';

function UploadForm({
  photo = {
    title: 'INVALID TITLE',
    photoFile: null,
    doesExist: false,
  },
  postFields = {
    title: 'INVALID TITLE',
    description: '',
    location: '',
    keywords: '',
    category: '',
    id: '',
    doesExist: false,
  },
  resetPhoto = (e) => e,
  formType,
}) {
  const currUser = useSelector((state) => state.session);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const [photoFields, setPhotoFields] = useState({
    title: formType === 'CREATE' ? photo.title : postFields.title,
    description: postFields.description,
    photo: photo.photoFile,
    // photoUrl: photo.url,
    location: postFields.location,
    keywords: postFields.keywords,
    category: postFields.category,
    user_id: currUser,
  });
  const [showCancel, setShowCancel] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (formType === 'CREATE' && !photoFields.title) {
      setPhotoFields({ ...photoFields, ...photo, photo: photo.photoFile });
    }
  }, [formType, photo]);

  useEffect(() => {
    if (formType === 'UPDATE') {
      setPhotoFields({ ...photoFields, ...photo, ...postFields });
    }
  }, [formType, postFields]);

  const handleChange = (label, val) => {
    setPhotoFields({ ...photoFields, [label]: val });
  };

  const createPost = (e) => {
    e.preventDefault();
    PostAPiUtils.createPost(photoFields).then(() => {
      setNotification('Post Successfully Created');
      setIsDisabled(true);
    });
  };

  const updatePost = (e) => {
    e.preventDefault();
    const { photo, ...rest } = photoFields;
    // PostAPiUtils.updatePost(rest).then(() =>
    //   setNotification('Post Successfully Updated'),
    // );
    // dispatch(updatePostAction(rest)).then((what) => {
    //   setNotification('Post Successfully Updated');
    //   console.log(what);
    // });
    updatePostAction(rest)(dispatch).then(() => {
      setNotification('Post Successfully Updated');
    });
  };

  const deleteUserPost = (e) => {
    e.preventDefault();
    dispatch(deletePost(postFields.id));
    setNotification('Post Successfully Deleted');
    setShowCancel(false);
  };
  return (
    <>
      {formType === 'CREATE' && (
        <div className='upload--subheader '>
          <span className='homefeed-home-btn'>
            <FontAwesomeIcon icon={faImages} size='2x' />
            All photos
          </span>
        </div>
      )}
      {notification && <Notification message={notification} />}
      <div className='photo--edit-form'>
        {/* LEFT BAR */}
        {formType === 'CREATE' && (
          <div className='upload--wrapper'>
            <div className='create--photo' title={photoFields.title}>
              <img src={photo.photoUrl} alt='photo' />
            </div>
          </div>
        )}

        {/* RIGHTBAR */}
        <div className='upload--rightbar'>
          <form
            onSubmit={
              formType === 'CREATE' ? (e) => createPost(e) : (e) => updatePost(e)
            }
          >
            <div>
              <label htmlFor='upload--title'>Title</label>
              <input
                type='text'
                id='upload--title'
                onChange={(e) => handleChange('title', e.target.value)}
                value={photoFields.title}
                required={true}
                className='upload--input'
              />
            </div>
            <div>
              <label htmlFor='upload--description'>Description</label>
              <textarea
                id='upload--description'
                onChange={(e) => handleChange('description', e.target.value)}
                value={photoFields.description}
                className='upload--input'
              />
            </div>

            <div>
              <label htmlFor='upload--location'>Location</label>
              <input
                type='text'
                id='upload--location'
                onChange={(e) => handleChange('location', e.target.value)}
                value={photoFields.location}
                className='upload--input'
              />
            </div>

            <div>
              <Dropdown
                list={categoryOptions}
                title='Categories'
                handleClick={(category) => handleChange('category', category)}
              />
            </div>

            <div className='upload--btn-wrapper'>
              <button
                type='reset'
                onClick={() => setShowCancel((old) => !old)}
                className='auth--btn error-btn'
              >
                {formType === 'CREATE' ? 'Cancel' : 'Delete'}
              </button>
              {formType === 'CREATE' ? (
                <button type='submit' className='auth--btn' disabled={isDisabled}>
                  Upload
                </button>
              ) : (
                <button type='submit' className='auth--btn'>
                  Update
                </button>
              )}
            </div>

            {/* RESET FORM MODAL */}
            {showCancel && (
              <div className='reset-modal--wrapper'>
                <div className='reset-modal--content'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    size='3x'
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  {formType === 'CREATE' ? (
                    <>
                      <h3>You have unsaved changes</h3>
                      <p>
                        Are you sure you want to leave without saving? Your changes
                        will be lost.
                      </p>
                      <button
                        onClick={resetPhoto}
                        className='btn--reverse-color started--btn photo--leave-btn'
                      >
                        Leave without saving
                      </button>
                    </>
                  ) : (
                    <>
                      <h3>Delete photo</h3>
                      <p>
                        Photo will be permanently deleted from All photos library.
                      </p>

                      <button
                        type='button'
                        style={{ margin: '25px' }}
                        onClick={(e) => deleteUserPost(e)}
                        className='btn--reverse-color started--btn photo--leave-btn'
                      >
                        Confirm and delete
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setShowCancel((old) => !old)}
                    className='photo--cancel-btn'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
