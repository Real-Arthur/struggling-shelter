import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Typography, TextField, TextareaAutosize } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: '75%',
    border: '2px solid #000',
    backgroundColor: '#eceff1'
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[800],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


// Handles individually rendered animals and
// corresponding modals
function AdoptionAnimal(props) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true)
  };
  const handleClose = () => {
    setOpenModal(false)
  };
  const toRegister = () => {
    console.log('props', props);
    
    props.dispatch({
      type: 'SET_INTERESTED',
      payload: {
        id: props.id,
        name: props.name
      }
    })
    props.history.push('/register')
  }
  // Modal info
  const moreInfo = (       
        <Grid container className={classes.paper} direction='column' alignItems='center'>
          <Grid item>
            <Button color='primary' onClick={toRegister}>Interested in Adopting</Button>
            <Typography>{props.name}</Typography>
          </Grid>
          <Grid item>
            <img style={{height: '20rem', width: 'auto'}} src={props.picture} alt={props.name}/>
          </Grid>
          <Grid item>
            <Grid xs={6} container direction='row' justify='space-between' alignItems='flex-start'>
            <Grid item><Typography>{props.age}</Typography></Grid>
            <Grid item><Typography>{props.color}</Typography></Grid>              
            <Grid item><Typography>{props.coat_length}</Typography></Grid>              
            <Grid item><Typography>{props.size}</Typography></Grid>              
            <Grid item><Typography>{props.breed}</Typography></Grid>
            </Grid>             
          </Grid>
      </Grid>
  );
  return (
    <Grid style={{maxHeight: '25rem', maxWidth: '15rem'}} container direction="row" justify="space-evenly" alignItems="center">
      <Grid item>
        <img style={{height: '15rem', width: '15rem'}} src={props.picture}/>
          <Typography>
            Name: {props.name}
          </Typography>
          <Typography>
            Age: {props.age}
          </Typography>
      </Grid>
        <ColorButton variant='outlined' color='primary' onClick={handleOpen}>More Info About {props.name}</ColorButton>
      <Modal
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
      >
        {moreInfo}
      </Modal>
    </Grid>
  );
}

export default connect()(withRouter((AdoptionAnimal)));