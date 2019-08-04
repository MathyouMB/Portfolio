import React from 'react';
import '../style/App.scss';
import Header from './Header';
import Bar from './Navbar';


const App: React.FC = () => {
  return (
    <div className="app">
     <Bar/>
     <Header/>
    </div>
  );
}

export default App;
