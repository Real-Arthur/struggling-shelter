import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { green, cyan } from '@material-ui/core/colors';
import './Adopt.css'
// Material UI styling
const useStyles = makeStyles((theme) => ({
  modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '50%',
  margin: 'auto'
  },
  paper: {
    position: 'absolute',
    border: '2px solid #000',
    backgroundColor: '#eceff1'
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  picture: {
    maxWidth: '50%',
    margin: 'auto'
  }
}));
// Cyan button
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(cyan[200]),
    backgroundColor: cyan[200],
    '&:hover': {
      backgroundColor: cyan[400],
    },
  },
}))(Button);
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
        <Grid container direction='column' alignItems='center'>
          <ColorButton2 color='primary' onClick={toRegister}>
            Interested in Adopting
          </ColorButton2>
            <Typography variant='h3'>{props.name}</Typography>
            <img className={classes.picture} src={props.picture} alt={props.name}/>
            {/* Animal properties */}
            <Typography>Age: {props.age} old</Typography>
            <Typography>Size: {props.size}</Typography>
            <Typography>Color: {props.color}</Typography>      
            <Typography>Breed: {props.breed}</Typography>                       
            <Typography>Coat: {props.coat_length}</Typography>
            <Typography>Personality: {props.personality}</Typography>
            <Typography>Price: ${props.price}</Typography>
        </Grid> 
      </Grid>
    </Grid>
  );
  return (
    <Grid style={{height: '25rem', width: '15rem'}} container direction="row" justify="space-evenly" alignItems="center" className='slightpadding'>
      <Grid item style={{paddingBottom: '1em'}}>
        <img style={{height: '15rem', width: '15rem'}} src={props.picture} alt={props.name}/>
          <Typography>
            Name: {props.name}
          </Typography>
          <Typography>
            Age: {props.age}
          </Typography>
          <Typography>
            Breed: {props.breed}
          </Typography>
      </Grid>
        <ColorButton variant='outlined' color='primary' onClick={handleOpen}>
          More Info About
          <br/> 
          {props.name}
        </ColorButton>
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