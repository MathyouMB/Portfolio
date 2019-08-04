import React from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';


const Header: React.FC = () => {

  return (
      <div>
        <div className="page-header">
            <div className="page-header-profile hvr-float fadeIn">
            <div className="page-header-name">
                <h1>MATTHEW</h1>
                <h3>MacRae - Bovell</h3>
            </div>
                <div className="page-header-dash"></div>
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
        <div className="page-header2">
            
        </div>
    </div>
  );
}

export default Header;
