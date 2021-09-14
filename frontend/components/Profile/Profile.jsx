import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserPosts } from '../../utils/postApi';

function Profile() {
  const [profileInfo, setProfileInfo] = useState({
    fname: '',
    lname: '',
    posts: [],
    avatarUrl: 'https://avatars.dicebear.com/api/avataaars/:seed.svg',
  });
  const { id } = useParams();
  const userPosts = useSelector((state) => state.posts.userPosts);

  useEffect(() => {
    fetchUserPosts(id).then((response) => {
      setProfileInfo((old) => ({ ...old, ...response }));
    });
  }, []);
  console.log({ profileInfo });

  return (
    <div className='profile-wrap'>
      {id && (
        <>
          <div className='profile--wrapper'>
            <div className='profile-img-wrapper'>
              <img src={profileInfo.avatarUrl} alt='avatar' />
            </div>
            <h2>
              {profileInfo.fname} {profileInfo.lname}
            </h2>
            <span>{profileInfo.lname}</span>
            <button className='auth--btn'>Follow</button>
          </div>
          <div>
            <div>
              <div className='upload--subheader '>
                <span className='homefeed-home-btn'>
                  Photos {profileInfo.posts.length}
                </span>
              </div>
              {profileInfo.posts.map((post) => (
                <button key={post.id} className='upload--wrapper'>
                  <figure className='profile--hover-img'>
                    <img src={post.photoUrl} />
                    <figcaption>{post.title}</figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
