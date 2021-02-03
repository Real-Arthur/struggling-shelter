import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container } from '@material-ui/core';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function StaffHomePage() {
  return (
    <Container 
      maxWidth='xs' 
      style={{marginTop: '2em'}}
    >
      <Typography variant='h4'>
        Employee Portal
      </Typography>
      <LoginForm />
      <RegisterForm />
    </Container>
  );
}

export default connect(mapStoreToProps)(withRouter((StaffHomePage)));
