import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // JAVASCRIPT

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <section className='projects-grid'>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', background: '#ececec' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-one'
            ></CardTitle>
            <CardText>
              MongoDB, Express, React, Nodejs Application. React with Redux used
              on the frontend. Node.js and Javascript running on an express
              server. Intergrated Github API to fetch repostories on user
              profile. Feel free to make an account, and make some friends!
            </CardText>
            <CardActions border>
              <Button
                style={{ color: '#FF00DD', textDecoration: 'none' }}
                colored
              >
                <a
                  href='https://www.getconnected.dev/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/getconnectednow'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-two'
            ></CardTitle>
            <CardText>
              Blogging website built with NodeJs, Express web framework and
              MongoDB noSQL Database. Full REST API with token authentication,
              routes, EJS templates, and Socket IO for live chatting. Project is
              currently deployed to Heroku.
            </CardText>
            <CardActions border>
              <Button src='/' style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://justvent.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/justvent'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-six'
            ></CardTitle>
            <CardText>
              Web application using Node.js backend, Express server, MongoDB
              database. Basic REST API, OOP approach, MVC Layout, EJS Templates.
              Users can create an account, track calories, set weight loss
              goals, and blog their journey. Demo deployed to Heroku. CURRENTLY
              IN PRODUCTION
            </CardText>
            <CardActions border>
              <Button src='/' style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://loseandlive.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/loseandlive'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-three'
            ></CardTitle>
            <CardText>
              Travel Startup Site built with HTML,CSS,SCSS, Javascript, and
              JQuery. Used Gulp to run auto-reload and used to compile code for
              deployment. Using Sprites to display SVG images. Mobile First
              Approach. Using BEM principles.
            </CardText>
            <CardActions border>
              <Button src='/' style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://michaelliriano.github.io/travel-site/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/travel-site'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <br style={{ padding: '3em' }} />
        </section>
      );

      // PHP
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-four'
            ></CardTitle>
            <CardText>
              Custom Wordpress theme for a University. Built with PHP Apache,
              MySQL, and Wordpress REST API. Frontend frameworks used was
              Bootstrap. Site is not up due to hosting account issue. Please
              feel free to check out the code
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );

      // PYTHON
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-five'
            ></CardTitle>
            <CardText>
              Full Stack Python Django Application. Styling done with Bootstrap
              4. User Authentication with Knox. React/Redux for the Frontend.
              Using mySQL as a Database. Add Leads, Remove Leads, Update Leads.
            </CardText>
            <CardActions border>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/lead-tracker'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-seven'
            ></CardTitle>
            <CardText>
              Freelance website for a local Real Estate Title business. Website
              built with HTML, CSS, Javascript, JQuery, Node.js, Webpack, SASS,
              and Bootstrap. Google Maps API displayed on Frontend.
            </CardText>
            <CardActions border>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://www.firstchoicetitleservices.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/firstchoicetitle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-eight'
            ></CardTitle>
            <CardText>
              Website for Client's Real Estate Law business. Using React for the
              frontend, and express server for backend. Client had personal
              input on design scheme. Deployed to heroku.
            </CardText>
            <CardActions border>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/lawofficeofeugenevigoa'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='http://vigoalaw.net'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card
            className='card-border'
            shadow={5}
            style={{ minWidth: '450', margin: 'auto' }}
          >
            <CardTitle
              style={{
                color: 'white',
                height: '176px'
              }}
              className='card-photo-nine'
            ></CardTitle>
            <CardText>
              Freelance Marketing Portfolio site built for a client. Mobile
              first approach, pure HTML, CSS, and Javascript. No frameworks.
              Deployed to Netlify
            </CardText>
            <CardActions border>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://github.com/michaelliriano/ravynportfolio'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </Button>
              <Button style={{ color: '#FF00DD' }} colored>
                <a
                  href='https://www.ravynsullivan.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Site
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <section className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Javascript</Tab>
          <Tab>PHP</Tab>
          <Tab>Python</Tab>
          <Tab>Freelance</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default Projects;
