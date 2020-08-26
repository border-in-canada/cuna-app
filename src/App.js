import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ApplicationForm from './containers/ApplicationForm/ApplicationForm';
import SignupForm from './containers/SignupForm/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ApplicationForm} />
          <Route path="/create-account" component={SignupForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
