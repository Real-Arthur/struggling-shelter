import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';
import HomeButton from './NavBar/HomeButton';
import DonateButton from './NavBar/DonateButton';
import VolunteerButton from './NavBar/VolunteerButton';
// Banner to house and organize nav bar, animal shelter, etc. 
function Banner(props) {
  return (
    <Box>
      <Grid container direction='row' justify='space-between'>
        <Grid item>
          <HomeButton />
          <DonateButton />
          <VolunteerButton />
        </Grid>
        <Grid item>
          <Typography variant="h2">Animal Shelter</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect()(withRouter(Banner));