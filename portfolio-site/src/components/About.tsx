import React, { useState }  from 'react';
import '../style/page-about.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const About: React.FC = () => {
  const scrollIcon = <FontAwesomeIcon icon={faScroll} />
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const gitIcon = <FontAwesomeIcon icon={faGithub} />
  const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
  return (  
    <div className="page-about" id="about">
        <div className="page-about-seperator">
          <div className="page-about-conent-container">
            <div className="page-about-profile">
              <img className="page-about-profile-image hvr-float" src="https://cdn.discordapp.com/attachments/490220076163792896/607962933711994880/unknown.png"></img>
            </div>
            <div className="page-about-content">
                  <h1>About Me</h1> 
                  <p className="page-about-content-p">{/*<a href="https://carleton.ca">*/}
                    I'm an aspiring fullstack web and software developer currently studying full-time at <span className="page-about-bright" id="page-about-bright-red">Carleton University</span>. 
                     I have a passion for learning about new technology and currently work as a web developer for the <span className="page-about-bright" id="page-about-bright-black">Bank of Canada </span> 
                      and <span className="page-about-bright" id="page-about-bright-yellow"> Explorator Technology.</span>
                     </p> 
                     <div className="page-header-icons" id="page-about-font-size">
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
                          {scrollIcon}
                      </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
