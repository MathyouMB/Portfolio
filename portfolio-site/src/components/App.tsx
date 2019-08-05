import React from 'react';
import '../style/App.scss';
import Header from './Header';
import About from './About';
import Particle from './Particles';



const App: React.FC = () => {
  return (
    <div className="app">
      <Particle/>
     <Header/>
     <About/>
     
    </div>
  );
}

export default App;
