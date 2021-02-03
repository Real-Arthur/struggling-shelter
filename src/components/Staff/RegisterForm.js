import { Box, Grid, InputLabel, TextField, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
    this.props.history.push('/staff/home')
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Box style={{backgroundColor: '#EFF7F6'}}>
        <Grid container direction="column" alignItems="flex-start">
      {/* <form className="formPanel" onSubmit={this.registerUser}> */}
        <Typography variant="h6">Register User</Typography>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <Grid item>
          <InputLabel htmlFor="username">
            Username:
            <TextField
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </InputLabel>
        </Grid>
        <Grid item>
          <InputLabel htmlFor="password">
            Password:
            <TextField
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </InputLabel>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={this.registerUser}>Register</Button>
        </Grid>
      </Grid></Box>
    );
  }
}

export default connect(mapStoreToProps)(withRouter((RegisterForm)));
