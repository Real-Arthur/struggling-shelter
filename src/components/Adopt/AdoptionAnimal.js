import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Typography, TextField, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';

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
}));

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
  // Modal info
  const moreInfo = (       
        <Grid container className={classes.paper} direction='column' alignItems='center'>
          <Grid item> 
            <Typography><Button>Interested in Adopting</Button>{props.name}</Typography>
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
        <Button onClick={handleOpen}>More Info About {props.name}</Button>
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