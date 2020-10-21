import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import { LandingPage, Login, Register, Error404, PrivateRoute, UnauthRoute } from './Components/index/index';
import { Posts, Dashboard } from './Containers/index/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>

          <UnauthRoute exact path='/' component={ LandingPage } />
          <UnauthRoute path='/login' component={ Login } />
          <UnauthRoute path='/register' component={ Register } />
        
          <PrivateRoute path="/dashboard" component={ Dashboard } />
          <PrivateRoute path="/posts" component={ Posts } />
          <Route component={ Error404 } />

        </Switch>
      </div>
    );
  }
}

export default App;