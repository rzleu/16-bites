import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faLeaf,
  faTools,
  faMedal,
  faBriefcase,
  faLemon,
  faRocket,
  faTrophy,
  faPiggyBank,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';
import AppleStore from 'Images/apple_store.svg';
import GooglePlay from 'Images/google-play-badge.svg';
import devices from 'Images/devices.png';
import portfolio from 'Images/portfiolio.png';
import quests from 'Images/quests.png';
import licensing from 'Images/licensing.jpg';
import cardOne from 'Images/card-1.jpg';
import cardTwo from 'Images/card-2.jpg';
import cardThree from 'Images/card-3.jpg';
import cardFour from 'Images/card-4.jpg';
import Footer from '../Footer';
import Card from '../Card';
import Editor from '../RootComponents/Editor';

function Root() {
  return (
    <>
      <section className='background'>
        <div className='root--content'>
          <h1 className='root--title'>
            Discover and share the world’s best photos
          </h1>
          <p className='root--para'>
            Get inspired with incredible photos from diverse styles and genres
            around the world. We're not guided by fads—just great photography.
          </p>
          <Link to='/signup' className='signup-nav-btn root--sign-up'>
            Sign Up
          </Link>

          <h2 className='splash--header--secondary'>
            <span>What makes us different</span>
          </h2>

          <div className='splash--content-one'>
            <FontAwesomeIcon icon={faLeaf} style={{fontSize: '60px'}} />

            <h3 className='splash--header-two'>Grow as a photographer</h3>
            <p>
              With Statistics and Pulse you get valuable insights into how your
              photos are performing and how you rank in comparison to other
              photographers in the community.
            </p>
          </div>

          <div className='splash--content-two'>
            <FontAwesomeIcon icon={faChartLine} style={{fontSize: '60px'}} />

            <h3 className='splash--header-two'>Build your career</h3>
            <p>
              Get immediate exposure with your first upload. Our Pulse algorithm
              surfaces new photographs and photographers, ensuring your photos
              are seen by the community so you receive valuable feedback on day
              one.
            </p>
          </div>

          <div className='splash--content-three'>
            <FontAwesomeIcon icon={faTools} style={{fontSize: '60px'}} />
            <h3 className='splash--header-two'>See how you're performing</h3>
            <p>
              Present yourself as a professional. Display your Services, create
              a Directory listing and get hired, showcase your articles,
              presets, videos, and more with Resources, and curate Galleries to
              highlight your work.
            </p>
          </div>

          {/* SECTION 2 */}
          <section className='splash--section-two'>
            <h2>Get the App</h2>
            <p>
              Join our community of over 16 million like-minded photographers.
              Download the 500px app for Android and iOS today!
            </p>

            <div className='splash--badges'>
              <a href='#'>
                <GooglePlay />
              </a>
              <a href='#'>
                <AppleStore />
              </a>
            </div>
          </section>
          <div className='splash--curve-yellow'></div>
          <div className='splash--devices'>
            <img
              src={devices}
              alt='devices image'
              style={{maxHeight: '340px', maxWidth: '340px'}}
            />
          </div>
        </div>

        {/* OTHER MAIN PARTS */}
        <div className='secondary--content-wrapper'>
          {/* SECTION 3 */}
          <div className='splash--banner splash--section-three'>
            <div className='splash--banner-icon splash--banner-editor-icon'>
              <FontAwesomeIcon icon={faMedal} size='4x' />
            </div>
            <h2>Editor's Choice</h2>
          </div>

          {/* SECTION 4 */}
          <section className='splash--section-four'>
            <h3>The best of the best</h3>
            <p>
              Our editors are always on the lookout for jaw dropping content for
              you to discover and stay inspired. Check back weekly to see what’s
              new.
            </p>
            <Link
              to='/editors'
              className='btn--reverse-color editors-choice-btn'
            >
              View Editors' Choice
            </Link>

            <Editor />
          </section>

          {/* SECTION 5 */}
          <>
            <div className='splash--banner splash--section-five-banner'>
              <div className='splash--banner-icon splash--banner-porfolio-icon '>
                <FontAwesomeIcon icon={faBriefcase} size='4x' />
              </div>
              <h2>Portfolio</h2>
            </div>

            <div className='splash--banner-content'>
              <h3>Designed and built for photographers</h3>
              <p>
                Create your own high-quality website in minutes. Portfolios
                allows you to share your work externally so you can build your
                own brand and market yourself as a professional photographer.
              </p>
              <Link
                to='/portfoliio'
                className='btn--reverse-color started--btn'
              >
                Get Started
              </Link>

              <img src={portfolio} alt='portfolio' className='img--large' />
            </div>
          </>

          {/* SECTION 6 */}
          <>
            <div className='splash--banner splash--section-six-banner'>
              <div className='splash--banner-icon splash--banner-apple-icon'>
                <FontAwesomeIcon icon={faLemon} size='4x' />
              </div>
              <h2>Resource Hub</h2>
            </div>

            <div className='splash--banner-content'>
              <h3>Discover something new</h3>
              <p>
                Browse videos, articles, workshops, and presets from 500px users
                to discover new areas of photography and grow your skills.
                Become a Pro member to list your Resources in the Hub.
              </p>
              <Link to='/portfolio' className='btn--reverse-color started--btn'>
                View Resource Hub
              </Link>

              <div className='card--wrapper'>
                <Card
                  image={cardOne}
                  title='Landscape Photography Tutorial'
                  tags={['Article', 'Online', 'Free']}
                  footerTitle='Anthill499'
                />

                <Card
                  image={cardTwo}
                  title='How to shoot fine art on homel'
                  tags={['Video', 'Online', 'Free']}
                  footerTitle='ahumanpinto'
                />

                <Card
                  image={cardThree}
                  title='Shooting Balancing Photos with E.'
                  tags={['Podcast', 'Online', 'Free']}
                  footerTitle='literal_monkey_monk'
                />

                <Card
                  image={cardFour}
                  title='Great Big Photography World Pod...'
                  tags={['Podcast', 'Online', 'Free']}
                  footerTitle='checkin_man'
                />
              </div>
            </div>
          </>

          {/* SECTION 7 */}
          <>
            <div className='splash--banner splash--section-seven-banner'>
              <div className='splash--banner-icon splash--banner-rocket-icon'>
                <FontAwesomeIcon icon={faRocket} size='4x' />
              </div>
              <h2>Quests</h2>
            </div>

            <div className='splash--banner-content quest--content'>
              <div className='quest--content-info'>
                <FontAwesomeIcon icon={faTrophy} size='4x' />
                <h3>Take photos. Win prizes.</h3>
                <p>
                  Quests are creative photo challenges that encourage you to
                  test your skills and submit your best work for a chance to win
                  exciting prizes. We launch new Quests with unique themes every
                  week so there is always something for everyone!
                </p>
                <Link
                  to='/portfolio'
                  className='btn--reverse-color started--btn'
                >
                  View Quests
                </Link>
              </div>
              <img src={quests} alt='quests' className='img--large' />
            </div>
          </>

          {/* SECTION 8 */}
          <>
            <div className='splash--banner splash--section-eight-banner'>
              <div className='splash--banner-icon splash--banner-crown-icon'>
                <FontAwesomeIcon icon={faCrown} size='4x' />
              </div>
              <h2>Licensing</h2>
            </div>

            <div className='splash--banner-content quest--content'>
              <img src={licensing} alt='licensing' className='img--large' />
              <div>
                <FontAwesomeIcon icon={faPiggyBank} size='4x' />
                <h3>Get paid for your photos</h3>
                <p>
                  Don’t let your photos sit there gathering dust, like on other
                  platforms. Gain exposure and get paid for your work with 500px
                  Licensing. You'll earn 60% royalties (one of the industry's
                  highest rates) when you license your photos exclusively with
                  our global distribution partners.
                </p>
                <Link
                  to='/licensing'
                  className='btn--reverse-color started--btn'
                  style={{position: 'relative', top: '20px'}}
                >
                  Tell me more
                </Link>
              </div>
            </div>
          </>

          {/* SECTION 8 */}
          <section className='splash--banner splash--section-nine join--banner'>
            <h2>Join our community today</h2>
            <p>
              Do you love photography? Want to constantly stay inspired and be
              surrounded by millions of like-minded creators? Then sign-up today
              and get rewarded for your love of photography.
            </p>
            <Link to='/signup' className='signup-nav-btn root--sign-up'>
              Sign up
            </Link>
          </section>

          <Footer />
        </div>
        <div className='wave'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Root;
