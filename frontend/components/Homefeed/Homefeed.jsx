import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal,
  faLemon,
  faRocket,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cardOne from 'Images/card-1.webp';
import cardTwo from 'Images/card-2.webp';
import cardThree from 'Images/card-3.webp';
import girl from 'Images/girl.jpg';

const communityCards = [
  {
    className: 'splash--banner-icon splash--banner-editor-icon',
    icon: faMedal,
    title: "Editor's Choice",
    description: 'Photos selected by our Editors',
    photos: [cardTwo, cardThree, girl, cardOne],
    path: '/editors',
  },
  {
    className: 'splash--banner-icon splash--banner-porfolio-icon',
    icon: faWindowRestore,
    title: 'Featured Galleries',
    description: 'Best Galleries on 16 bites',
    photos: [cardTwo, cardThree, girl, cardOne],
    path: '/galleries',
  },
  {
    className: 'splash--banner-icon splash--banner-rocket-icon',
    icon: faRocket,
    title: 'Quests',
    description: 'Photo contests to challenges you',
    photos: [cardTwo, cardThree, girl, cardOne],
    path: '/quests',
  },
  {
    className: 'splash--banner-icon splash--banner-apple-icon',
    icon: faLemon,
    title: 'Resource Hub',
    description: 'Tools to grow your skills',
    photos: [cardTwo, cardThree, girl, cardOne],
    path: '/resources',
  },
];

function Homefeed() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const users_array = Object.values(users);

  console.log({ users_array });
  useLayoutEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (users_array.length === 0) return null;

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
          <div className='home--carousel'>
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
