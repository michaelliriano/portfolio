import React, { Component } from 'react';
import Video from '../video/smoke.mp4';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <section id='homepage' className='homepage'>
        <div id='video'>
          <video
            id='smoke'
            className='smoke'
            src={Video}
            playsInline
            autoPlay={true}
            muted={true}
            height='100%'
            width='100%'
          >
            <source
              src={Video}
              type='video/mp4'
              playsInline
              autoPlay={true}
              muted={true}
              height='100%'
              width='100%'
            />
          </video>
        </div>
        <div id='smokeEnd'></div>
        <h1 className='myName'>
          <span>M</span>
          <span>I</span>
          <span>C</span>
          <span>H</span>
          <span>A</span>
          <span>E</span>
          <span>L</span>
        </h1>
        <h3 className='status'>
          <span>Full-Stack Web Developer</span>
        </h3>
        <div className='social-icons'>
          <span>
            <a
              href='https://github.com/michaelliriano'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-github'></i>
            </a>
          </span>
          <span>
            <a
              href='https://www.getconnected.dev/profile/5dec02751c4469276d66b654'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-user-circle'></i>
            </a>
          </span>
          <span>
            <a
              href='https://twitter.com/deejaygigz'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </span>
          <span>
            <a
              href='https://www.facebook.com/miliriano'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </span>
        </div>
        <div className='icon-enter'>
          <Link to='/aboutme'>
            <span>
              <i className='fas fa-arrow-circle-right'></i>
            </span>
          </Link>
          <p className='circle-down'>
            <span>ENTER</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Landing;
