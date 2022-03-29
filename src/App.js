import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Word from './Components/Word';
import Number from './Components/Number';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/:word/:textColor/:backgroundColor">
            <Word />
          </Route>

          <Route exact path="/:word">
            <Word />
          </Route>

          <Route exact path="/:number">
            <Number />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
