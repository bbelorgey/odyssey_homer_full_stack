import React, { Component } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        {/* <Link to="/signin">SignIn</Link> */}
        {/* <Link to="/signup">signup</Link>
        <Link to="/profile">SignIn</Link> */}
        <Switch>
          <Route exact path="/" component={SignIn}> </Route>
          <Route path="/signin" component={SignIn}> </Route>
          <Route path="/signup" component={SignUp}> </Route>
          <Route path="/profile" component={Profile}> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
