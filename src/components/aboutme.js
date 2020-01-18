import React, { Component } from 'react';
import Resume from '../resume/michaellirianoresume.pdf';

class About extends Component {
  render() {
    return (
      <section id='about' className='about'>
        <div className='text-container'>
          <h4>
            Hi There! I'm <span className='highlight'>Michael</span>
          </h4>
          <br />
          <p>
            I am a self taught full-stack web developer from Fort Lauderdale,
            FL. I have been coding for over 3 years. I am passionate about all
            aspects of technology. However, web development is my favorite.
          </p>

          <p>
            Take a look at my{' '}
            <span className='highlight'>
              <a
                className='highlight'
                href={Resume}
                download='Michael Liriano Resume'
              >
                Resume
              </a>
            </span>{' '}
            and my
            <span className='highlight'>
              {' '}
              <a
                className='highlight'
                href='https://github.com/michaelliriano'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>{' '}
            </span>
            account. I'm available for freelance work. You can contact me at
            <span className='highlight'>
              <a href='mailto:michaelandrewliriano@gmail.com'>
                {' '}
                michaelandrewliriano@gmail.com
              </a>
            </span>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
