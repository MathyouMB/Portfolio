import React, { useState }  from 'react';
import '../style/page-projects.scss';
import '../style/project.scss';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';



interface Tag{
    name: string
    color: string,
}

const Project: React.FC<{ imgUrl:string, title: string, date:string, type: string, text: string, repoUrl: string, tags: Tag[]}> = (props) => {
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
    <ScrollAnimation animateIn="fadeIn" style={{"display": "flex", "justifyContent": "center"}}>
    <div className="project hvr-float">
        <div className="project-image-div">
            <img className="project-image" src={props.imgUrl}></img>
          </div>
        <div className="project-inner">
          <div className="project-content">
            <div className="project-content-title">
             <h2><a href={props.repoUrl}>{props.title}</a></h2>
             <h2><a href={props.repoUrl}>{gitIcon}</a></h2>
            </div>
            <h4>{props.type}</h4>
            <h5>{props.date}</h5>
            <p>{props.text}</p>
            {skills}
          </div>   
        </div>    
    </div>
    </ScrollAnimation>
  );
  }

const Projects: React.FC = () => {

  return (  
    <div className="page-projects">
        <div className="page-projects-inner">
          <div className="page-projects-project-wrapper">
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608047086729953281/unknown.png"
                title ="Personal Porfolio" 
                type="Website"
                date="August 2019"
                text= "My new personal developer portolio build on React with Typescript."
                repoUrl="https://github.com/MathyouMB/Portfolio"
                tags= {[
                  { name: "React", color: "#E2C800"},
                  { name: "Typescript", color: "#007ACC"},
                  { name: "Sass", color: "#CD6799"},
                ]}        
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608010963366707230/unknown.png"
                title ="Connect Fources" 
                type="PC Game"
                date="May 2018"
                text="A connect four game where you can shift the force of gravity and discs break over time."
                repoUrl="https://github.com/MathyouMB/ConnectFources"
                tags= {[
                  { name: "Java", color: "#A36D47"},
                  { name: "JavaFX", color: "#FF6A00"},
                ]} 
              />
             <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608015128272830474/unknown.png"
                title ="Sead" 
                type="Web Application"
                date="Febuary 2019"
                text= "A study app that will break up your lazily written notes and return them in an easy to read page by page format."
                repoUrl="https://github.com/MathyouMB/Sead"
                tags= {[
                  { name: "Python", color: "#3161B2"},
                  { name: "Flask", color: "#164D61"},
                  { name: "Materialize", color: "#EC6D74"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608039424210763786/unknown.png"
                title ="Recreo Mortem" 
                type="Multiplayer Game"
                date="Dec 2017 - July 2018"
                text= 'A modded version of the multiplayer game "Realm of the Mad God" containing custom dungeons, items, and classes.'
                repoUrl="https://github.com/MathyouMB/RecreoSource"
                tags= {[
                  { name: "C#", color: "#18871A"},
                  { name: "ActionScript3", color: "#B61F1B"},
                  { name: "MySQL", color: "#5D87A1"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608044241939333142/unknown.png"
                title ="Stack Search" 
                type="Web Application"
                date="March 2019"
                text= "An employment related search engine tailored for software developers. This project was built at CuHacking 2019."
                repoUrl="https://github.com/MathyouMB/StackSearch"
                tags= {[
                  { name: "Flask", color: "#164D61"},
                  { name: "Selenium", color: "#707070"},
                  { name: "Bootstrap", color: "#563D7C"},
                ]} 
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608047465559752732/unknown.png"
                title ="Dusk" 
                type="PC Game"
                date="September 2014"
                text= "A 2D platformer game developed to further learn C++, pointers, and object oriented programming."
                repoUrl="https://github.com/MathyouMB/Dusk"
                tags= {[
                  { name: "C", color: "#707070"},
                  { name: "C++", color: "#CD6799"},
                ]} 
              />
             <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608004139099750503/unknown.png"
                title ="Hello." 
                type="PC Game"
                date="November 2017"
                text= "A fast paced bullet hell game where the player can warp their position to dodge incoming bullets."
                repoUrl="#tbh"
                tags= {[
                  { name: "GML", color: "#6EB52D"},
                ]}  
              />
              <Project 
                imgUrl="https://cdn.discordapp.com/attachments/490220076163792896/608051384780193863/unknown.png"
                title ="Project 22" 
                type="Mobile Game"
                date="December 2015"
                text= "A casual mobile game available on the google play store. This game was programmed in less than 24 hours."
                repoUrl="https://github.com/MathyouMB/Project22"
                tags= {[
                  { name: "GML", color: "#6EB52D"},
                ]} 

              />
          </div>
         
              
        </div>
    </div>
  );
}


export default Projects;
