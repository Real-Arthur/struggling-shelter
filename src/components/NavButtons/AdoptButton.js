import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";
// Simple nav button to home page
function HomeButton(props) {
  const sendHome = () => {
    props.history.push('/home')
  }
  return (
    <Button 
      onClick={() => sendHome()}
    >
      Adopt
    </Button>
  )
}

export default connect()(withRouter(HomeButton));