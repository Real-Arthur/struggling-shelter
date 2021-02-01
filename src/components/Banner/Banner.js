import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import AdoptButton from './NavBar/AdoptButton';
import DonateButton from './NavBar/DonateButton';
import VolunteerButton from './NavBar/VolunteerButton';
import NameAndLogo from './NameAndLogo';
import LogOutButton from './NavBar/LogOutButton';
import './Banner.css';
// Banner to house and organize nav bar, name, logo 
function Banner(props) {
  return (
    <Box>
      <Grid container direction='column' alignItems='center'>
        {props.location.pathname === '/home' &&
          <Grid item className='banner'>
            <DonateButton />
            <VolunteerButton />
          </Grid>
          }
        {props.location.pathname === '/donate' &&
          <Grid item className='banner'>
            <AdoptButton />
            <VolunteerButton />
          </Grid>  
        }
        {props.location.pathname === '/volunteer' &&
          <Grid item className='banner'>
            <AdoptButton />
            <DonateButton />
          </Grid>  
        }
        {props.location.pathname === '/register' &&
          <Grid item className='banner'>
            <AdoptButton />
            <DonateButton />
            <VolunteerButton />
          </Grid>  
        }
        {props.location.pathname === '/staff' &&
        <Grid item className='banner'>
            <AdoptButton />
            <DonateButton />
            <VolunteerButton />
            </Grid>
        }
        {props.location.pathname === '/staff/home' &&
        <Grid container direction='row' justify='space-between' className='staffBanner'>
          <Grid item >
            <AdoptButton />
            <DonateButton />
            <VolunteerButton />
            </Grid>
            <Grid item >
              <LogOutButton />
            </Grid>
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