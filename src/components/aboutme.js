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
            I am a self taught Web Developer from Fort Lauderdale, Florida and I
            have been programming for over 3 years. I am passionate about all
            types of technology, however, my primary focus and inspiration is
            Web Development. I am constantly experimenting with new technologies
            and stacks and strive to better myself as a developer each and
            everyday. In my free time, I enjoy playing guitar, piano, and
            producing music on Pro Tools for myself and others.
          </p>
          <p>
            let <i>skills</i> ={' '}
            <span className='highlight'>
              [ 'HTML', 'CSS', 'Bootstrap', 'Javascript(OOP,ES6)', 'React',
              'NodeJS', 'Express', 'Python', 'Django', 'PHP', 'MongoDB',
              'PostgresQL' 'MySQL', 'Git', 'Github', 'Webpack', 'Sass' ]
            </span>{' '}
            ;
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
