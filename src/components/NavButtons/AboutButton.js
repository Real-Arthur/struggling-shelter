import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"
// Simple nav button to about page
function AboutButton(props) {
  const sendToAboutPage = () => {
    props.history.push('/about')
  }
  return (
    <Button onClick={() => sendToAboutPage()}>About</Button>
  )
}

export default connect()(withRouter(AboutButton));