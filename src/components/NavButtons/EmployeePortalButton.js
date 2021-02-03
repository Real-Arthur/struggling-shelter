import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"
// Simple nav button to donate page
function EmployeePortalButton(props) {
  const sendToEmployeePage = () => {
    props.history.push('/staff')
  }
  return (
    <Button onClick={() => sendToEmployeePage()}>Employee Portal</Button>
  )
}

export default connect()(withRouter(EmployeePortalButton));