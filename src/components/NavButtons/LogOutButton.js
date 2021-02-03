import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";

function LogOutButton(props) {
  const doBoth = () => {
    props.dispatch({
      type: 'LOGOUT'
    })
    props.history.push('/staff')
  }
    return (
      <Button onClick={() => doBoth()}>Log Out</Button>
    )
};

export default connect()(withRouter((LogOutButton)));
