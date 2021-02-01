import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";

class LogOutButton extends Component {
  doBoth = () => {
    this.props.dispatch({
      type: 'LOGOUT'
    })
    this.props.history.push('/staff')
  }
  render() {
    return (
      <Button onClick={() => this.doBoth()}>Log Out</Button>
    )
  }
};

export default connect()(withRouter((LogOutButton)));
