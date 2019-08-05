import React from 'react';
import '../style/App.scss';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Particle from './Particles';

const Seperator: React.FC = () => {
  return(
    <div className="seperator"></div>
  );
}

const App: React.FC = () => {
  return (
    <div className="app">
     <Particle/>
     <Header/>
     <Seperator/>
     <About/>
     <Seperator/>
     <Projects/>
     <Seperator/>
     
     
    </div>
  );
}

export default App;
