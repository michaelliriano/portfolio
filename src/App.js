import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Resume from './resume/michaellirianoresume.pdf';

function App() {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header className='header-color' title=' ' scroll>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <a href={Resume} download='Michael Liriano Resume'>
              Resume
            </a>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title='Michael Liriano'>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <a href={Resume} download='Michael Liriano Resume'>
              Resume
            </a>
            <a
              href='https://github.com/michaelliriano'
              rel='noopener noreferrer'
              target='_blank'
            >
              Github
            </a>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
