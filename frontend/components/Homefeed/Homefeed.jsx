import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal,
  faLemon,
  faAngleRight,
  faRocket,
  faWindowRestore,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const communityCards = [
  {
    className: 'splash--banner-icon splash--banner-editor-icon',
    icon: faMedal,
    title: "Editor's Choice",
    description: 'Photos selected by our Editors',
    photos: [
      'https://unsplash.com/photos/SavQfLRm4Do/download?force=true&w=640',
      'https://unsplash.com/photos/U7JweiOQpHA/download?force=true&w=640',
      'https://unsplash.com/photos/XQ66bEj72VE/download?force=true&w=640',
      'https://unsplash.com/photos/Nqvm_d7jueg/download?force=true&w=640',
      'https://unsplash.com/photos/RnCPiXixooY/download?force=true&w=640',
    ],
    path: '/editors',
  },
  {
    className: 'splash--banner-icon splash--banner-porfolio-icon',
    icon: faWindowRestore,
    title: 'Featured Galleries',
    description: 'Best Galleries on 16 bites',
    photos: [
      'https://unsplash.com/photos/yihlaRCCvd4/download?force=true&w=640',
      'https://unsplash.com/photos/jLXXCJtopss/download?force=true&w=640',
      'https://unsplash.com/photos/Lv9M6Ddea_8/download?force=true&w=640',
      'https://unsplash.com/photos/UWni0vqQotc/download?force=true&w=640',
      'https://unsplash.com/photos/SFT9G3pAxLY/download?force=true&w=640',
    ],
    path: '/galleries',
  },
  {
    className: 'splash--banner-icon splash--banner-rocket-icon',
    icon: faRocket,
    title: 'Quests',
    description: 'Photo contests to challenges you',
    photos: [
      'https://unsplash.com/photos/jb6HWarT3ok/download?force=true&w=640',
      'https://unsplash.com/photos/OHOU-5UVIYQ/download?force=true&w=640',
      'https://unsplash.com/photos/UzOKDfoRrDU/download?force=true&w=640',
      'https://unsplash.com/photos/5o9Cm6yBrhI/download?force=true&w=640',
      'https://unsplash.com/photos/trYl7JYATH0/download?force=true&w=640',
    ],
    path: '/quests',
  },
  {
    className: 'splash--banner-icon splash--banner-apple-icon',
    icon: faLemon,
    title: 'Resource Hub',
    description: 'Tools to grow your skills',
    photos: [
      'https://unsplash.com/photos/6lQDFGOB1iw/download?force=true&w=640',
      'https://unsplash.com/photos/X_IvVDuHvDQ/download?force=true&w=640',
      'https://unsplash.com/photos/UcfKYTan-LU/download?force=true&w=640',
      'https://unsplash.com/photos/fbAnIjhrOL4/download?force=true&w=640',
      'https://unsplash.com/photos/dL09wmeZGaI/download?force=true&w=640',
    ],
    path: '/resources',
  },
];

function Homefeed() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const users = useSelector((state) => state.users);
  const currUser = useSelector((state) => state.session.id);
  const users_array = Object.values(users).filter(({ id }) => id !== currUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  // if (users_array.length === 0) return null;
  return (
    <div className='homefeed--container'>
      <div className='homefeed--container-pad '>
        <h2>Home Feed</h2>
        <p className='homefeed-txt--content'>
          See photos and published Galleries from people you follow.
        </p>
        <button className='homefeed-home-btn'>Home</button>
      </div>

      <div className='homefeed--content homefeed--container-pad '>
        <div className='homefeed--welcome-msg'>
          <div>Welcome to 16 bites</div>
          <span>Follow photographers to get started</span>
        </div>

        <section className='home--carousel-wrapper'>
          <div>
            <h3>Featured photographers</h3>
            <p className='homefeed-txt--content'>Follow to explore new work </p>
          </div>
          <div className='carousel-wrper'>
            <div className='home--carousel' ref={scrollRef}>
              {users_array.map(({ id, posts, fname, lname }) => (
                <div key={id} className='home--carousel-itm'>
                  <div className='img--wrapper'>
                    {posts.slice(0, 4).map(({ id, photo }) => (
                      <Link to={`/photos/${id}`} key={id}>
                        <img src={photo} alt='card' />
                      </Link>
                    ))}
                  </div>
                  <div className='home--carousel-txt-content'>
                    <Link to={`/user/${id}`} className='nav--link item--links'>
                      <div>
                        {fname} {lname}
                      </div>
                    </Link>
                    <button className='auth--btn'>Follow</button>
                  </div>
                </div>
              ))}
            </div>
            {/* {scrollRef.current?.scrollLeft !== 0 && ( */}
            <button className='carousel-btn-left' onClick={scrollLeft}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            {/* )} */}
            {/* {scrollRef.current?.scrollLeft !== scrollRef.current?.scrollLeftMax && ( */}
            <button className='carousel-btn-right' onClick={scrollRight}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            {/* )} */}
          </div>
        </section>

        {/* EXPLORER */}
        <section>
          <h3>Explore the community</h3>
          <p className='homefeed-txt--content'>
            Discover photos from all over the world
          </p>
          <div className='homefeed--explore-wrapper'>
            {communityCards.map(
              ({ icon, title, description, photos, className, path }, i) => (
                <Link to={path} key={i}>
                  <div className='homefeed--card-item'>
                    <div className='homefeed-card-title'>
                      <div className={`${className} homefeed--card-icon `}>
                        <FontAwesomeIcon icon={icon} />
                      </div>
                      <span>
                        <div className='card--title'>{title}</div>
                        <div className='card--description'>{description}</div>
                      </span>
                    </div>
                    <div className='homefeed--card-photos'>
                      {photos.map((photo, i) => (
                        <div key={i} className='homefeed-img-wrapper'>
                          <img src={photo} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homefeed;
