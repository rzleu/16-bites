import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersPosts } from '../../actions/postActions';
import UploadForm from '../Upload/UploadForm';

function Manage() {
  const [currPhoto, setCurrPhoto] = useState({
    title: '',
    photoUrl: '',
    description: '',
    location: '',
    category: '',
    keywords: '',
    id: '',
    doesExist: true,
  });

  const currUser = useSelector((state) => state.session.id);
  const userPosts = useSelector((state) => state.posts.userPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currUser) {
      dispatch(fetchUsersPosts(currUser));
    }
  }, [dispatch, currUser]);

  if (!currUser || !userPosts) {
    return null;
  }
  return (
    <div>
      <h2 className='upload--header '>Photo manager</h2>
      <div className='upload--subheader '>
        <span className='homefeed-home-btn'>
          <FontAwesomeIcon icon={faImages} size='2x' />
          All photos
        </span>
      </div>

      {userPosts.length === 0 ? (
        <div className='manage--wrapper'>
          <FontAwesomeIcon icon={faImages} size='3x' />
          <span>You have no photos</span>
          <span>Upload some photos and they’ll appear here.</span>
          <Link to='/manage/upload' className='auth--btn file--btn'>
            Upload
          </Link>
        </div>
      ) : (
        <div className='manage-bg'>
          <div className='manage--img-wrapper'>
            {userPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => {
                  setCurrPhoto((old) => ({ ...old, ...post }));
                }}
                className={classNames({
                  'upload--wrapper': true,
                  'manage--active': post.id === currPhoto.id,
                })}
              >
                <img src={post.photoUrl} />
              </button>
            ))}
          </div>

          <div className='manage--upload'>
            <UploadForm
              postFields={currPhoto}
              formType='UPDATE'
              key={currPhoto.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Manage;
