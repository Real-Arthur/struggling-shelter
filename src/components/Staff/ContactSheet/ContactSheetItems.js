import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green, cyan } from '@material-ui/core/colors';
// Green button
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
function ContactSheetItems(props) {
  const markAsContacted = () => {
    props.dispatch({
      type: 'SET_CONTACTED',
      payload: {
        id: props.contact.id
      }
    })
  }
  return (
        <Grid style={{height: '25rem', width: '15rem'}} container direction="row" justify="space-evenly" alignItems="center" className='slightpadding'>
        <Grid item style={{paddingBottom: '1em'}}>
          <Typography variant='h5'>
            Contact Info:
            </Typography>
            <Typography>
            Name: {props.contact.first_name} {props.contact.last_name}
            </Typography>
            <Typography>
              Email: {props.contact.email}
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
            <img  src={props.contact.picture} alt={props.contact.name} style={{height: '8em', width: '8em'}}/>
        </Grid>
        <Grid item>
          <ColorButton2 variant='outlined' color='primary' onClick={markAsContacted}>
            Mark As Contacted
          </ColorButton2>
        </Grid>
      </Grid>
  );
}

export default connect()(withRouter((ContactSheetItems)));
