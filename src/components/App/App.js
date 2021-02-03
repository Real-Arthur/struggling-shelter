import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Local imports
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// Component imports
import Banner from '../Banner/Banner';
import Adopt from '../Adopt/Adopt';
import Volunteer from '../Volunteer/Volunteer';
import Donate from '../Donate/Donate';
import About from '../About/About';
import Register from '../Register/Register';
import StaffLoginPage from '../Staff/StaffLoginPage';
import StaffHome from '../Staff/StaffHome';
// High level component to house and organize child components
class App extends Component {
  render() {
    return (
      <Router>
          <Banner />
          <Redirect 
          path='/'
          to='/home'
          />
        <Switch>
          <Route 
            path='/home' 
            exact 
            component={Adopt} 
          />
          <Route 
            path='/volunteer'
            exact 
            component={Volunteer} 
          />
          <Route 
            path='/donate' 
            exact 
            component={Donate} 
          />
          <Route 
            path='/about' 
            exact 
            component={About} 
          />
          <Route 
            path='/register' 
            exact 
            component={Register} 
          />
        </Switch>
        <Switch>
          <Route 
            path='/staff' 
            exact 
            component={StaffLoginPage}
          />
          <ProtectedRoute 
            exact 
            path='/staff/home' 
            component={StaffHome} 
          />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);