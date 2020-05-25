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
              <Route exact path={'/login'} render={(routeProps) => <Login {...routeProps}/>}/>
              <Route exact path={'/signup'} render={(routeProps) => <SignUp {...routeProps}/>}/>
              <Route component={error404} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
