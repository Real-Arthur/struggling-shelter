import { Paper, Grid, InputLabel, TextField, Button, Typography, Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
  registerForAdoption = (event) => {
    event.preventDefault();
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
      <Container>
        <Typography variant="h6">Register To Adopt {this.props.store.interestedReducer.name}</Typography>
          <InputLabel htmlFor="firstName">
            First Name:
            <TextField
              type="text"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </InputLabel>
          <InputLabel htmlFor="lastName">
          Last Name:
            <TextField
              type="text"
              name="lastName"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </InputLabel>
          <InputLabel htmlFor="email">
          Email:
            <TextField
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleInputChangeFor('email')}
            />
          </InputLabel>
          <InputLabel htmlFor="dob">
          Date Of Birth:
            <TextField
              type="date"
              name="dob"
              value={this.state.dob}
              required
              onChange={this.handleInputChangeFor('dob')}
            />
          </InputLabel>
          <InputLabel htmlFor="address">
          Address:
            <TextField
              type="text"
              name="address"
              value={this.state.address}
              required
              onChange={this.handleInputChangeFor('address')}
            />
          </InputLabel>
          <InputLabel htmlFor="occupation">
          Occupation:
            <TextField
              type="text"
              name="occupation"
              value={this.state.occupation}
              required
              onChange={this.handleInputChangeFor('occupation')}
            />
          </InputLabel>
          <InputLabel htmlFor="typeOfHome">
          Type Of Home:
            <TextField
              type="text"
              name="typeOfHome"
              value={this.state.typeOfHome}
              required
              onChange={this.handleInputChangeFor('typeOfHome')}
            />
          </InputLabel>
          <Button variant="outlined" color="primary" onClick={this.registerForAdoption}>
            Submit Registration
          </Button>
          </Container>
    );
  }
}

export default connect(mapStoreToProps)(Register);