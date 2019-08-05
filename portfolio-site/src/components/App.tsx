import React from 'react';
import '../style/App.scss';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const App: React.FC = () => {

  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <Route exact path="/" render={() => <Redirect to="/about" />}/>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300} unmountOnExit>
                  <Switch location={location}>
                    <Route exact path="/home" component={Header} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route render={() => <div>Not Found :c</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
          </div>
        )}
      />
    </Router>
  );
}

export default App;
