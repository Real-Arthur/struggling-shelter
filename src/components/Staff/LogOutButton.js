import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Typography } from "@material-ui/core";

class LogOutButton extends Component {
  doBoth = () => {
    this.props.dispatch({
      type: 'LOGOUT'
    })
    this.props.history.push('/staff')
  }
  render() {
    return (
      <Button
        variant="outlined"
        color="primary"
        onClick={() => this.doBoth()}
      >
        <Typography color="error">Log Out</Typography>
      </Button>
    )
  }
};

export default connect()(withRouter((LogOutButton)));
