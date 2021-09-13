import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import UploadForm from './UploadForm';

function Upload() {
  const [showPhotoForm, setShowPhotoForm] = useState(false);
  const [photo, setPhoto] = useState(null);

  const resetPhoto = () => {
    setPhoto(null);
    setShowPhotoForm(false);
  };

  return (
    <>
      <h2 className='upload--header '>Upload</h2>
      {!showPhotoForm ? (
        <>
          <div className='upload--banner'>
            <FontAwesomeIcon
              icon={faGem}
              style={{ color: 'whitesmoke', marginRight: '10px' }}
            />
            You&apos;re on a free Pro membership trial! You have unlimited uploads
            for 13 more days.
            <span> Learn more about memberships</span>
          </div>

          <section className='upload--content'>
            <FontAwesomeIcon icon={faArrowUp} size='3x' />
            <h2>Upload photos</h2>
            <label htmlFor='photo--upload' className='auth--btn file--btn'>
              Select photos
            </label>
            <input
              type='file'
              id='photo--upload'
              accept='image/png,image/jpg,image/jpeg,image/'
              onChange={(e) => {
                e.preventDefault();
                setShowPhotoForm(!showPhotoForm);
                setPhoto(e.currentTarget.files[0]);
              }}
              multiple
            />
            <div>
              <span>
                Or drag and drop photos anywhere on this page: To be implemented :(
              </span>
            </div>
          </section>
        </>
      ) : (
        <UploadForm photo={photo} resetPhoto={resetPhoto} />
      )}
    </>
  );
}

export default Upload;
