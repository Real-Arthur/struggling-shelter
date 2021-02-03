import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"
// Simple nav button to volunteer page
function VolunteerButton(props) {
  const sendToVolunteerPage = () => {
    props.history.push('/volunteer')
  }
  return (
    <Button 
      onClick={() => sendToVolunteerPage()}
    >
      Volunteer
    </Button>
  )
}

export default connect()(withRouter(VolunteerButton));