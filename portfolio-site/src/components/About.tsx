import React, { useState }  from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


const About: React.FC = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const scrollIcon = <FontAwesomeIcon icon={faScroll} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />


   
  return (  
      <div>
        
          
            
        
          
                    <Link to="/home">ok</Link>
             
           
            
        
    </div>
  );
}

export default About;
