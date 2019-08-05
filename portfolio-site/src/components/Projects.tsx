import React, { useState }  from 'react';
import '../style/page-projects.scss';
import '../style/project.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';




interface Tag{
    name: string
    color: string,
}

const Project: React.FC<{ imgUrl:string, title: string, type: string, text: string, tags: Tag[]}> = (props) => {
  const gitIcon = <FontAwesomeIcon icon={faGithub} />
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
    <div className="project hvr-float">
        <div className="project-image-div">
            <img className="project-image" src={props.imgUrl}></img>
          </div>
        <div className="project-inner">
          <div className="project-content">
            <h2>{props.title}<span> {gitIcon}</span></h2>
            <h4>{props.type}</h4>
            <p>{props.text}</p>
            {skills}
          </div>   
        </div>    
    </div>
  );
  }

const Projects: React.FC = () => {


  return (  
    <div className="page-projects">
        <div className="page-projects-inner">
          <div className="page-projects-project-wrapper">
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]}        
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608010963366707230/unknown.png"
                title ="Connect Fources" 
                type="PC Game"
                text="A connect four game where you can shift the force of gravity and discs break over time."
                tags= {[
                  { name: "Java", color: "#A36D47"},
                  { name: "JavaFX", color: "#FF6A00"},
                ]} 
              />
             <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608015128272830474/unknown.png"
                title ="Sead" 
                type="Web Application"
                text= "A study app that will break up your lazily written notes and return them in an easy to read page by page format."
                tags= {[
                  { name: "Python", color: "#3161B2"},
                  { name: "Flask", color: "#164D61"},
                  { name: "Materialize", color: "#EC6D74"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]} 
              />
             <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]}  
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Project Name" 
                type="PC Game"
                text= "ok"
                tags= {[
                  { name: "test", color: "#eee"},
                  { name: "test2", color: "#eee"},
                  { name: "test3", color: "#eee"},
                ]} 

              />
          </div>
         
              
        </div>
    </div>
  );
}


export default Projects;
