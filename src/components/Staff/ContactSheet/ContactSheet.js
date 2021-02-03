import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { Grid } from '@material-ui/core';
import ContactSheetItems from './ContactSheetItems';
// holds and organizes contact sheets items
// fetches contact list from sagas on load
function ContactSheet(props) {
  useEffect(() => {
    props.dispatch({
      type: 'FETCH_CONTACTS'
    })
  }, []);
  return (
    <Grid 
      container 
      direction="row" 
    >
      {props.store.contactsReducer.map((contact, i) =>
        <Grid 
          key={i} 
          item xs={12} 
          sm={12} 
          md={6} 
          lg={4} 
          style={{boxSizing: 'content-box', marginBottom: '3em'}}
        >
          <Grid 
            container 
            direction="row" 
            justify="space-around" 
            alignItems="center"
          >
          <ContactSheetItems
            key={i}
            contact={contact}
          />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default connect(mapStoreToProps)(ContactSheet);