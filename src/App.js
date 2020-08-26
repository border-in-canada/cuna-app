import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ApplicationForm from './containers/ApplicationForm/ApplicationForm';
import SignupForm from './containers/SignupForm/SignupForm';
import Declined from './components/Declined/Declined';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={ApplicationForm} />
        <Route path="/create-account" component={SignupForm} />
        <Redirect to="/" />
      </Switch>
    );
    
   if (!this.props.userApproved) {
      routes = (
        <Switch>
          <Route path="/declined" component={Declined} />
        </Switch>
      )
   }

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userApproved: state.approved
  }
}

export default connect(mapStateToProps, null)(App);
