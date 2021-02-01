import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container } from '@material-ui/core';
import LoginForm from './LoginForm';
import LogOutButton from '../Banner/NavBar/LogOutButton';
import RegisterForm from './RegisterForm';

function StaffHomePage(props) {
  console.log('props', props);
  
  const [heading, setHeading] = useState('Employee Portal');

  return (
    <Container maxWidth='xs' style={{marginTop: '2em'}}>
      <Typography variant='h4'>{heading}</Typography>
      <LoginForm />
      <RegisterForm />
      <LogOutButton />
    </Container>
  );
}

export default connect(mapStoreToProps)(withRouter((StaffHomePage)));
