import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './welcome/Welcome';
import Courses from './courses/Courses';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
