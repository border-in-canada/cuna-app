import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ApplicationForm from './containers/ApplicationForm/ApplicationForm';
import SignupForm from './containers/SignupForm/SignupForm';
import Declined from './components/Declined/Declined';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ApplicationForm} />
          <Route path="/create-account" component={SignupForm} />
          <Route path="/declined" component={Declined} />
        </Switch>
      </div>
    );
  }
}

export default App;
