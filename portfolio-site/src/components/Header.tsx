import React, { useState }  from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Particle from './Particles';
//import resume from '../resumes/resume.pdf';


const Header: React.FC = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const scrollIcon = <FontAwesomeIcon icon={faScroll} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
   
  return ( 
      
      <div className="page-header-wrap">
        <div className="page-header">
            <ScrollAnimation animateIn="fadeIn" style={{"display": "flex", "justifyContent": "center"}}>
            <div className="page-header-profile fadeIn">
                <div className="page-header-name hvr-float">
                    <h1>MATTHEW</h1>
                    <h3>MacRae - Bovell</h3>
                </div>
                <div className="page-header-dash"></div>
                <div className="page-header-title">Computer Science Student</div>
                <div className="page-header-icons">
                    <div className="page-header-icon hvr-float">
                    <a href="https://github.com/MathyouMB">{gitIcon}</a>
                    </div>
                    <div className="page-header-icon hvr-float">
                        <a href="https://www.linkedin.com/in/matthewmacraebovell/">{linkedIcon}</a>
                    </div>
                    <div className="page-header-icon hvr-float">
                        <a href="mailto:matthewmacraebovell@outlook.ca">{mailIcon}</a>
                    </div>
                    <div className="page-header-icon hvr-float">
                        <a href="https://drive.google.com/file/d/1fHfytC_4Y0l6_7dyLMvy4GW9ADgSm5Hc/view">{scrollIcon}</a>
                    </div>
                </div>
                <br></br>
                <div className="page-header-button">
                   <a href="#about"><button className="page-header-button-enter hvr-float">About Me</button></a>
                </div>
            </div>
            </ScrollAnimation>   
            </div>         
        </div>
    
  );
}

export default Header;
