import React from 'react';
import '../style/page-timeline.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline: React.FC = () => {
  const scrollIcon = <FontAwesomeIcon icon={faStar} />
  return ( 
      
    <div className="page-timeline">
        <br></br>
        <br></br>
        <h1 className="page-projects-header">Experiences</h1> 
        <VerticalTimeline>
            
        <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{ background: 'rgb(220, 29, 47)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(220, 29, 47)' }}
            date="May 2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/jNGrDOX.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://www.kinaxis.com/en">
            <h3 className="vertical-timeline-element-title">Application Platform Developer</h3>
            <h5 className="vertical-timeline-element-subtitle"><a href="https://www.kinaxis.com/en">Kinaxis</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Will be developing backend features for Kinaxis' cloud-based supply chain management product 'Rapid Response'.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#9A4ED5', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #9A4ED5' }}
            date="January 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/sL7CpFA.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://www.cuhacking.com/">
            <h3 className="vertical-timeline-element-title">Hackathon Organizer</h3>
            <h5 className="vertical-timeline-element-subtitle "><a href="https://www.cuhacking.com/">CuHacking 2020</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Contributed to the organization of Carleton University's annual hackathon attended by over 600 students.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(25,25,25)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(25,25,25)' }}
            date="May 2019 - April 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/9pXqJMv.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://www.bankofcanada.ca/">
            <h3 className="vertical-timeline-element-title">IT Systems Developer</h3>
            <h5 className="vertical-timeline-element-subtitle"><a href="https://www.bankofcanada.ca/">Bank of Canada</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Tested, maintained, and developed applications that support several different teams and departments within the Bank.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FCCF2B', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FCCF2B' }}
            date="April 2019 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/RLjD1q3.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://explorator.ca/">
            <h3 className="vertical-timeline-element-title yellow-back">Junior Web Developer</h3>
            <h5 className="vertical-timeline-element-subtitle yellow-back"><a href="https://explorator.ca/">Explorator</a></h5>
            <h5 className="vertical-timeline-element-subtitle yellow-back">Ottawa, Canada</h5>
            <p className="yellow-back">
            Currently developing and maintaining client contracted web applications using React, Express, Ruby on Rails, GraphQL, and a variety of Amazon Web Services including S3, and EC2.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#181818', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #181818' }}
            date="October 2018 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/KKTbEDl.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="http://ccss.carleton.ca/">
            <h3 className="vertical-timeline-element-title">Director & Volunteer</h3>
            <h5 className="vertical-timeline-element-subtitle "><a href="http://ccss.carleton.ca/">Carleton Computer Science Society</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Elected representative acting as a liaison between students and the Department of Computer Science regarding academic issues, policies, and events, representing over 2000 undergraduate students.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#E21534', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #E21534' }}
            date="September 2018 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/u67h2cK.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://carleton.ca/">
            <h3 className="vertical-timeline-element-title">B.C.S. in Computer Science (Honours)</h3>
            <h5 className="vertical-timeline-element-subtitle"><a href="https://carleton.ca/">Carleton University</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Presently learning the fundamentals of systems programming, algorithm time complexity, abstract data types, software engineering, and web development.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F47820', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F47820' }}
            date="July 2017 - August 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundImage: 'url("https://i.imgur.com/ldwBVnf.png")', backgroundPosition: "center", backgroundSize: "contain" }}>
            <a href="https://digitera.agency/">
            <h3 className="vertical-timeline-element-title">Python Developer Co-op</h3>
            <h5 className="vertical-timeline-element-subtitle "><a href="https://digitera.agency/">Digitera Interactive</a></h5>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <p>
            Utilized Python, Beautiful Soup, and Selenium to develop automated web application tests and web scrapers.
            </p>
            </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={scrollIcon}
        />
        </VerticalTimeline>
    </div>
    
  );
}

export default Timeline;
