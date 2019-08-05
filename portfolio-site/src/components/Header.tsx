import React, { useState }  from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


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
                    <Link to="/about"><button className="page-header-button-enter hvr-float">About Me</button></Link>
                </div>
 

            </div>
            
        
            <Particles className="page-header-particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 2,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 4,
                                "distance": 40
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }   
                }}
            />
            
        </div>
    </div>
  );
}

export default Header;
