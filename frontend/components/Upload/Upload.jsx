import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import UploadForm from './UploadForm';

function Upload() {
  const [showPhotoForm, setShowPhotoForm] = useState(false);
  const [photo, setPhoto] = useState({
    photoFile: '',
    photoUrl: null,
    title: '',
    doesExist: true,
  });

  const resetPhoto = () => {
    setPhoto({
      photoFile: '',
      photoUrl: null,
      title: '',
      doesExist: true,
    });
    setShowPhotoForm(false);
  };

  const handleFile = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhoto({
        ...photo,
        photoFile: file,
        photoUrl: fileReader.result,
        title: file.name.split('.')[0],
      });
    };

    // debugger;
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
          <div
            style={{
              backgroundColor: 'var(--lighterGrey)',
              minHeight: '80vh',
              width: '100%',
              position: 'absolute',
              zIndex: -1,
            }}
          />
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
                handleFile(e);
                setShowPhotoForm(!showPhotoForm);
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
        <UploadForm photo={photo} resetPhoto={resetPhoto} formType='CREATE' />
      )}
    </>
  );
}

export default Upload;
