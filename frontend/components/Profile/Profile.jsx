import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserPosts } from '../../utils/postApi';
import { createFollow, deleteFollow, showFollows } from '../../utils/followApi';

function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    fname: '',
    lname: '',
    posts: [],
    avatarUrl: 'https://avatars.dicebear.com/api/avataaars/:seed.svg',
  });
  const { id: currUser } = useSelector((state) => state.session);
  const { id } = useParams();

  useEffect(() => {
    fetchUserPosts(id).then((response) => {
      setProfileInfo((old) => ({ ...old, ...response }));
    });

    showFollows(id).then((response) => {
      if (response.some(({ follower_id }) => follower_id == currUser)) {
        setIsFollowing(true);
      }
    });
  }, [currUser, id]);

  const handleFollow = () => {
    const obj = { follower_id: currUser, followee_id: id };

    if (!isFollowing) {
      createFollow(obj).then(() => {
        setIsFollowing(true);
      });
    } else {
      deleteFollow(obj).then(() => {
        setIsFollowing(false);
      });
    }
  };
  console.log(isFollowing);

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
            {isFollowing ? (
              <button className='auth--btn' onClick={handleFollow}>
                Unfollow
              </button>
            ) : (
              <button className='auth--btn' onClick={handleFollow}>
                Follow
              </button>
            )}
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
