import React, { useState }  from 'react';
import '../style/page-projects.scss';
import '../style/project.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Project: React.FC = () => {
    
  return (  
    
    <div className="project hvr-float">
                  
    </div>
 
  );
}

const Projects: React.FC = () => {
    
  return (  
    <div className="page-projects">
        <div className="page-projects-inner">
          <div className="page-projects-project-wrapper">
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
          </div>
         
              
        </div>
    </div>
  );
}


export default Projects;
