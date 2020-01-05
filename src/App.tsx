import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import ResumeBuilder from './components/Resume/ResumeBuilder';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div style={{backgroundColor:'#007bff'}}>
      <Router>
        <React.Fragment>
        <Navigation />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/ResumeBuilder" exact component={ResumeBuilder}/>
            <Route path="/Home" exact component={Home}/>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
