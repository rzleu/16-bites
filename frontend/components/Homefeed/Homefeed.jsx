import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
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
import cardFour from 'Images/card-4.webp';
import girl from 'Images/girl.jpg';

const photos = [
  {
    id: 1,
    photos: [cardTwo, cardThree, girl],
    fullName: 'Tatiana Koshutina',
    location: 'Екатеринбург, Свердловская об',
    user_id: 2,
  },
  {
    id: 2,
    photos: [cardOne, cardFour],
    fullName: 'Łukasz Wiatrowski',
    location: 'Kraków',
    user_id: 1,
  },
];

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
    description: 'Best Galleries on 500px',
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
  // const photos = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!photos || photos.length === 0) return null;

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
          <div>Welcome to 500px</div>
          <span>Follow photographers to get started</span>
        </div>

        <section className='home--carousel-wrapper'>
          <div>
            <h3>Featured photographers</h3>
            <p className='homefeed-txt--content'>Follow to explore new work </p>
          </div>

          <div className='home--carousel'>
            {photos.map(({ id, photos, fullName, location = '', user_id }) => (
              <div key={id} className='home--carousel-itm'>
                <div className='img--wrapper'>
                  {photos.map((url, i) => (
                    <Link to={`/photos/${url.id}`} key={i}>
                      <img src={url} alt='' />
                    </Link>
                  ))}
                </div>
                <div className='home--carousel-txt-content'>
                  <Link to={`/user/${user_id}`} className='nav--link item--links'>
                    <div>{fullName}</div>
                    <span>{location}</span>
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
