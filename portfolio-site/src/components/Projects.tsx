import React, { useState }  from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


const Projects: React.FC = () => {


  return (  
    <div className="test">
          projects
        <Link to="/home">go to about</Link>
    </div>
  );
}

export default Projects;
