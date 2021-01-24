import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// Local imports
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Component imports
import Banner from '../Banner/Banner';
import Adopt from '../Adopt/Adopt';
import Volunteer from '../Volunteer/Volunteer';
import Donate from '../Donate/Donate';
// High level component to house and organize child components
class App extends Component {
  render() {
    return (
      <Router>
          <Banner />
        <Redirect from='/' to='/home' />
        <Switch>
          <Route path='/home' exact component={Adopt} />
          <Route path='/volunteer' exact component={Volunteer} />
          <Route path='/donate' exact component={Donate} />
        </Switch>
      </Router>
    )
  }
}

export default connect(mapStoreToProps)(App);