import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';
import AdoptButton from './NavBar/AdoptButton';
import DonateButton from './NavBar/DonateButton';
import VolunteerButton from './NavBar/VolunteerButton';
// Banner to house and organize nav bar, animal shelter, etc. 
function Banner(props) {
  console.log('location', props.location.pathname);
  return (
    <Box>
      <Grid container direction='column' alignItems='center'>
        {props.location.pathname === '/home' &&
          <Grid item style={{backgroundColor: '#D6FFF6', width: '100%'}}>
            <DonateButton />
            <VolunteerButton />
          </Grid>  
          }
        {props.location.pathname === '/donate' &&
          <Grid item style={{backgroundColor: '#D6FFF6', width: '100%'}}>
            <AdoptButton />
            <VolunteerButton />
          </Grid>  
        }
        {props.location.pathname === '/volunteer' &&
          <Grid item style={{backgroundColor: '#D6FFF6', width: '100%'}}>
            <AdoptButton />
            <DonateButton />
          </Grid>  
        }
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Typography variant="h2" style={{color: '#231651'}}>Animal Shelter</Typography>
           <Typography>Thinking about adopting a new friend. Press tabs to browse by type:</Typography>
          </Grid>       
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect()(withRouter(Banner));