import React, { useState }  from 'react';
import '../style/page-work.scss';
import '../style/experience.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Particle from './Particles';

interface Tag{
    name: string
    color: string,
}

const Experience: React.FC<{ imgUrl:string, title: string, date:string, type: string, text: string, repoUrl: string, tags: Tag[]}> = (props) => {
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const gitYoutube = <FontAwesomeIcon icon={faGithub} />
        const skills = []
        for (let j = 0; j<props.tags.length;j++) {
  
          const divStyle = {
            background: props.tags[j].color,
          };
  
            skills.push(
                <span style ={divStyle} className="project-skill">{props.tags[j].name}</span>
            )
        }
  
    return (  
      <div className="experience hvr-float">
          <div className="experience-header">
             <img className="experience-image" src={props.imgUrl}></img>
            </div>
          <div className="project-inner">
            <div className="project-content">
              <div className="project-content-title">
               <h2><a href={props.repoUrl}>{props.title}</a></h2>
              </div>
              <h4>{props.type}</h4>
              <h5>{props.date}</h5>
              <p>{props.text}</p>
              {skills}
            </div>   
          </div>    
      </div>
    );
}

const Work: React.FC = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const scrollIcon = <FontAwesomeIcon icon={faScroll} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />

  return (  
   
        <div className="page-work">
            
          <div className="page-projects-project-wrapper">
              <Experience 
                imgUrl="https://i.imgur.com/6K6kWaW.png"
                title ="Student, IT Systems Developer" 
                type="Website"
                date="August 2019"
                text= "Implemented and redesigned the relational data models of an existing web application to optimize data retrieval from RESTful endpoints "
                repoUrl="https://github.com/MathyouMB/Portfolio"
                tags= {[
                  { name: "JavaScript", color: "#E2C800"},
                  { name: "JQuery", color: "#007ACC"},
                  { name: "Sass", color: "#CD6799"},
                ]}        
              />
              <Experience 
                imgUrl="https://media.licdn.com/dms/image/C560BAQFACJkvB8RoAg/company-logo_400_400/0?e=1573689600&v=beta&t=wjCgmsP8CW4-nGQs1FJNswFWcDsjXfS4LJGRIqh3TmE"
                title ="Junior Web Developer" 
                type="PC Game"
                date="May 2018"
                text="Developed responsive mobile-friendly user interfaces using React and SASS web styling"
                repoUrl="https://github.com/MathyouMB/ConnectFources"
                tags= {[
                  { name: "Java", color: "#A36D47"},
                  { name: "JavaFX", color: "#FF6A00"},
                ]} 
              />
          </div>
         
              
      
        </div>
    
  );
}

export default Work;
