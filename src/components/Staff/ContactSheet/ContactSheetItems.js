import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import swal from 'sweetalert';
// Green button styles
const ColorButton2 = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[400]),
    backgroundColor: green[400],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}))(Button);
// Displays a person who has not been contacted
// Allows staff to udpate status of person
function ContactSheetItems(props) {
  const confirmContact = () => {
    swal({
      title: `Did you contact ${props.contact.first_name} about ${props.contact.name}?`,
      buttons: {
        edit: {
          text: 'Not yet',
          value: 'no',
          className: 'edit-button'
        },
        submit: {
          text: 'Submit',
          value: 'submit',
          className: 'submit-button'
        }
      }
    })
    .then((value) => {
      if(value === 'submit') {
        swal({
          title: 'Information Submitted',
          text: 'Keep up the good work!',
          icon: 'success'
        }).then(() => {
          markAsContacted()
        })
      }
    })
  }
  // marks that a person has been contacted
  const markAsContacted = () => {
    props.dispatch({
      type: 'SET_CONTACTED',
      payload: {
        id: props.contact.id
      }
    })
  }
  return (
    <Grid 
      container 
      direction='column' 
      alignItems='flex-start' 
      className='slightpadding'
    >
      <Grid item>
        <Typography variant='h5'>
          Contact Info:
        </Typography>
        <Typography>
          Name: {props.contact.first_name} {props.contact.last_name}
        </Typography>
        <Typography>
            Email: {props.contact.email}
        </Typography>
        <Typography>
            Phone Number: {props.contact.phone_number}
        </Typography>
        <Typography variant='h5'>
            Interested In:
        </Typography>
        <Typography>
          {props.contact.animal_type}
        </Typography>
        <Typography>
            {props.contact.breed}
        </Typography>
        <Typography>
          {props.contact.name}
        </Typography>
        <Typography>
          ${props.contact.price}
        </Typography>
        <Typography variant='h5'>
          Inquired on: 
        </Typography>
        <Typography variant='h5'>
          {props.contact.interested_on}
        </Typography>
          <img 
            src={props.contact.picture} 
            alt={props.contact.name} 
            style={{height: '8em', width: '8em', marginTop: '1em', marginBottom: '1em'}}
          />
      </Grid>
      <Grid>
        <ColorButton2 
          variant='outlined' 
          color='primary' 
          onClick={confirmContact}
        >
          Mark As Contacted
        </ColorButton2>
      </Grid>
    </Grid>
  );
}

export default connect()(withRouter((ContactSheetItems)));
