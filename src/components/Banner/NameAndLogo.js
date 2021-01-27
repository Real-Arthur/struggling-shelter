import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// Function to return name of animal shelter
// And logo if there ever is one
function NameAndLogo() {
  return (
    <Grid container direction='column' alignItems='center'>
      <Typography variant="h2" style={{color: '#231651'}}>Animal Shelter</Typography>
    </Grid>       
  );
}

export default NameAndLogo;