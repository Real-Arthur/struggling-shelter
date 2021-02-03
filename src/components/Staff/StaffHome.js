import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ContactSheet from './ContactSheet/ContactSheet';
import { Container, Typography } from '@material-ui/core';

function StaffHome() {
  return (
    <Container style={{maxWidth: '100%'}}>
      <Typography 
        variant='h4' 
        style={{textDecoration: 'underline'}}
      >
        People To Be Contacted
      </Typography>
      <ContactSheet />
    </Container>
  );
}

export default connect(mapStoreToProps)(StaffHome);