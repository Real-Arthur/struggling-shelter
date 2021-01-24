import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NavLinks from '../NavBar/NavLinks';
import Adopt from '../Adopt/Adopt';
import Banner from '../Banner/Banner';


class App extends Component {
  render() {
    return (
      <Router>
          <Banner />
          <NavLinks />
        <Redirect from='/' to='/home' />
        <Switch>
          <Route path='/home' exact component={Adopt} />
        </Switch>
      </Router>
    )
  }
}

export default connect(mapStoreToProps)(App);
