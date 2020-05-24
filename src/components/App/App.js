import React from 'react';
import '../../styles/App.css';
import '../../styles/Responsive.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from '../Landing';
import SignUp from '../SignUp';
import Login from '../Login';
import error404 from '../error404';


const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path={'/'} render={() => <Landing/>}/>
              <Route exact path={'/login'} render={() => <Login/>}/>
              <Route exact path={'/signup'} render={() => <SignUp/>}/>
              <Route component={error404} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
