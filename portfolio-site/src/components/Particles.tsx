import React, { useState }  from 'react';
import Particles from 'react-particles-js';

const Particle: React.FC = () => {
    
  return (  
        <Particles className="page-particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                        },
                        "size": {
                            "value": 4,
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
  );
}

export default Particle;
