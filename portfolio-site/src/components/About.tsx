import React, { useState }  from 'react';
import '../style/page-about.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Header: React.FC = () => {
    
  return (  
    <div className="page-about">
        <div className="page-about-inner"></div>
    </div>
  );
}

export default Header;
