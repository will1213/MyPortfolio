import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import './css/Projects.css';
import pictionary from './assets/pictionary.jpg'
import tracking from './assets/tracking.jpg';
import StreamingServiceCompiler from './assets/StreamingServiceCompiler.png';
import DownStair from './assets/DownStair.png';


const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div data-aos="fade-up" className="project">
        <img src={pictionary} className="project-Img" alt="project1" />
        <div className="project-description">
          <h3 className='project-title'>
            Pictionary
            <IconContext.Provider value={{ color: 'white' }}>
              <a href={'https://github.com/will1213/Inky.io'} target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
            </IconContext.Provider>
          </h3>

          <p>It's clone of skrible.io! </p>
          <p>A browser game that allow multiple users to play Pictionary in real-time.</p>
          <br/>
          <p>Some highlights include enabling user to login using google account and have a report system to ban the cheater from playing the game.</p>
        </div>
      </div>
      <div data-aos="fade-up" className="project">
        <img src={tracking} className="project-Img" alt="project2" />
        <div className="project-description">
          <h3 className='project-title'>
            Assets Tracking System 
            <IconContext.Provider value={{ color: 'white' }}>
                <a href={'https://github.com/will1213/tracking'} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
            </IconContext.Provider>
          </h3>
          <p>Have you ever experinced losing something? or you couldn't find something? I believe so.</p>
          <br/>
          <p>This project integrate hardware and software that can be used to track the location, and with the website created, the person can easily see the information about the device including GPS location.</p>

        </div>
      </div>
      <div data-aos="fade-up"  className="project">
        <img src={DownStair} className="project-Img" alt="project3" />
        <div className="project-description">
          <h3 className='project-title'>
            Down Stair Game
            <IconContext.Provider value={{ color: 'white' }}>
                <a href={'https://github.com/will1213/DownStairGame'} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href={'https://will1213.github.io/DownStairGame/'} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
            </IconContext.Provider>
          </h3>
          <p>It's a web based game.</p>
          <br/>
          <p>GIVE A TRY AND JUST SURIVIVE!</p>
          <br/>
          <p>Using Javascript game framework phaser to develop the game and create animation to display character turning.</p>
          <br/>
        </div>
      </div>
      <div data-aos="fade-up"  className="project">
        <img src={StreamingServiceCompiler} className="project-Img" alt="project4" />
        <div className="project-description">
          <h3 className='project-title'>
            Streaming Service Compiler
            <IconContext.Provider value={{ color: 'white' }}>
                <a href={'https://github.com/will1213/UI'} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href={'https://will1213.github.io/UI/'} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
            </IconContext.Provider>
          </h3>
          <p>There are lots of different streaming services out there nowday, and sometime the show you want to watch is on another streaming service, which is VERY frustrating.</p>
          <br/>
          <p>This project proposes the idea of combining all the streaming services you have subscribed, and directly watch any show from the software!</p>
          <br/>
          <p>With the uses of IDEO designing thinkings, the project is user friendly and very intuitive!</p>
        </div>
      </div>


    </div>
  );
};

export default Projects;
