import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine, faLeaf, faTools} from '@fortawesome/free-solid-svg-icons';

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
          <h4>WORK PLEASE</h4>

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
