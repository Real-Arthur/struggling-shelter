import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Register.css';
import { 
  Grid, 
  InputLabel, 
  TextField, 
  Button, 
  Typography, 
  Container 
} from '@material-ui/core';
import swal from 'sweetalert';
// Component to house potential adopter registration form
class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    address: '',
    occupation: '',
    typeOfHome: '',
    interestedIn: this.props.store.interestedReducer.id
  };
  // check for blank form fields
  // submit button is disabled until all fields are filled
  confirmedInputs =
    this.firstName !== '' &&
    this.lastName !== '' &&
    this.email !== '' &&
    this.dob !== '' &&
    this.address !== '' &&
    this.occupation !== '' &&
    this.typeOfHome !== '';
  // Alert Validation
  // User can go home, edit info, or submit info
  confirmAdoptionInterest = () => {
    swal({
      title: 'Did you fill out all information accurately?',
      buttons: {
        abort: {
          text: 'Back Home',
          value: 'abort',
          className: 'abort-button'
        },
        edit: {
          text: 'Edit info',
          value: 'edit',
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
      if(value === 'abort') {
        swal({
          title: 'Sending you back to check out more pet options'
        }).then(() => {
          this.props.history.push('./home');
        })
      }
      if(value === 'edit') {
        swal('Take your time')
      }
      if(value === 'submit') {
        swal({
          title: 'Information Submitted',
          text: 'A member of the animal shelter team will be in touch in the next 48 hours.',
          icon: 'success'
        }).then(() => {
          this.registerForAdoption()
          this.props.history.push('./home');
        })
      }
    })
  }
  // Dispatches adopter info to the CREATE_INTERESTED saga in /redux/saga/interested.saga.js
  registerForAdoption = () => {
    this.props.dispatch({
      type: 'CREATE_INTERESTED',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        dob: this.state.dob,
        address: this.state.address,
        occupation: this.state.occupation,
        typeOfHome: this.state.typeOfHome,
        interestedIn: this.state.interestedIn
      },
    });
  };
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  render() {
    return (
      <Container className='form' maxWidth='xs'>
        {/* <Grid container direction='column' justify='flex-start' alignItems='center'> */}
          <Typography variant="h6">Register To Adopt {this.props.store.interestedReducer.name}</Typography>
            <InputLabel className='form-spacing' htmlFor='firstName'>
              First Name:
                <TextField
                  type='text'
                  name='firstName'
                  value={this.state.firstName}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('firstName')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='lastName'>
              Last Name:
                <TextField
                  type='text'
                  name='lastName'
                  value={this.state.lastName}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('lastName')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='email'>
              Email:
                <TextField
                  type='email'
                  name='email'
                  value={this.state.email}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('email')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='dob'>
              Date Of Birth:
                <TextField
                  type='date'
                  name='dob'
                  value={this.state.dob}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('dob')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='address'>
              Address:
                <TextField
                  type='text'
                  name='address'
                  value={this.state.address}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('address')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='occupation'>
              Occupation:
                <TextField
                  type='text'
                  name='occupation'
                  value={this.state.occupation}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('occupation')}
                />
            </InputLabel>
            <InputLabel className='form-spacing' htmlFor='typeOfHome'>
              Type Of Home:
                <TextField
                  type='text'
                  name='typeOfHome'
                  value={this.state.typeOfHome}
                  required
                  fullWidth
                  onChange={this.handleInputChangeFor('typeOfHome')}
                />
            </InputLabel>
            <Button variant='contained' color='primary' disabled={this.confirmedInputs} onClick={this.confirmAdoptionInterest}>
              Submit Registration
            </Button>
        {/* </Grid> */}
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(Register);