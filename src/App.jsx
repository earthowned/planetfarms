import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Signup from './components/signup/index'
import RegisterComplete from './components/congratulation/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/register-complete">
          <RegisterComplete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


