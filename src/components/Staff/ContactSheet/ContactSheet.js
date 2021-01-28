import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { Container } from '@material-ui/core';

function ContactSheet(props) {
  const [heading, setHeading] = useState('Contact Sheet');
  useEffect(() => {
    props.dispatch({
      type: 'FETCH_CONTACTS'
    })
  }, [])

  return (
    <Container>
      <ul>
        {props.store.contactsReducer.map((contact, i) =>
        <li key={i}>{contact.first_name} {contact.last_name}</li>
        )}
      </ul>
    </Container>
  );
}

export default connect(mapStoreToProps)(ContactSheet);