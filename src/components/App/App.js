import React from 'react';
import '../../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from '../Landing';
import SignUp from '../SignUp';
import error404 from '../error404';


const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path={'/'} render={() => <Landing/>}/>
              <Route exact path={'/signup'} render={() => <SignUp/>}/>
              <Route component={error404} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
