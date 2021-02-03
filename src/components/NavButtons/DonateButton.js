import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"
// Simple nav button to donate page
function DonateButton(props) {
  const sendToDonatePage = () => {
    props.history.push('/donate')
  }
  return (
    <Button onClick={() => sendToDonatePage()}>Donate</Button>
  )
}

export default connect()(withRouter(DonateButton));