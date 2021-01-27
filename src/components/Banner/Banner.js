import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import AdoptButton from './NavBar/AdoptButton';
import DonateButton from './NavBar/DonateButton';
import VolunteerButton from './NavBar/VolunteerButton';
import NameAndLogo from './NameAndLogo';
// Banner to house and organize nav bar, animal shelter, etc. 
function Banner(props) {
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
        {props.location.pathname === '/register' &&
          <Grid item style={{backgroundColor: '#D6FFF6', width: '100%'}}>
            <AdoptButton />
            <DonateButton />
            <VolunteerButton />
          </Grid>  
        }
        <Grid item>
          <NameAndLogo />  
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect()(withRouter(Banner));