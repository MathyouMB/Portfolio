import React, { useState }  from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Particle from './Particles';


const Header: React.FC = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const scrollIcon = <FontAwesomeIcon icon={faScroll} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />

  return (  
      <div>
        <div className="page-header">
            <div className="page-header-profile fadeIn">
                <div className="page-header-name hvr-float">
                    <h1>MATTHEW</h1>
                    <h3>MacRae - Bovell</h3>
                </div>
                <div className="page-header-dash"></div>
                <div className="page-header-title">Full Stack Web Developer</div>
                <div className="page-header-icons">
                    <div className="page-header-icon hvr-float">
                        {gitIcon}
                    </div>
                    <div className="page-header-icon hvr-float">
                        {linkedIcon}
                    </div>
                    <div className="page-header-icon hvr-float">
                        {mailIcon}
                    </div>
                    <div className="page-header-icon hvr-float">
                        {scrollIcon}
                    </div>
                </div>
                <br></br>
                <div className="page-header-button">
                   <button className="page-header-button-enter hvr-float">About Me</button>
                </div>

            </div>
            </div>            
        </div>
    
  );
}

export default Header;
