import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import AdoptButton from '../NavButtons/AdoptButton';
import DonateButton from '../NavButtons/DonateButton';
import VolunteerButton from '../NavButtons/VolunteerButton';
import AboutButton from '../NavButtons/AboutButton';
import EmployeePortalButton from '../NavButtons/EmployeePortalButton';

import LogOutButton from '../NavButtons/LogOutButton';
import NameAndLogo from './NameAndLogo';
import './Banner.css';
// Banner to house and organize nav bar, name, logo
// renders differently depending on user location 
function Banner(props) {
  return (
    <Box>
      <Grid container direction='column' alignItems='center'>
        {props.location.pathname === '/home' &&
        <Grid container direction='row' justify='space-between' className='staffBanner'>
          <Grid item>
            <DonateButton />
            <VolunteerButton />
          </Grid>
          <Grid item>
            <AboutButton />
            <EmployeePortalButton />
          </Grid>
          </Grid>
          }
        {props.location.pathname === '/donate' &&
          <Grid container direction='row' justify='space-between' className='staffBanner'>
            <Grid item>
              <AdoptButton />
              <VolunteerButton />
            </Grid>
            <Grid item>
              <AboutButton />
              <EmployeePortalButton />
            </Grid>
          </Grid>

        }
        {props.location.pathname === '/volunteer' &&
          <Grid container direction='row' justify='space-between' className='staffBanner'>
            <Grid item>
              <AdoptButton />
              <DonateButton />
            </Grid>
            <Grid item>
              <AboutButton />
              <EmployeePortalButton />
            </Grid>  
        </Grid>   
        }
        {props.location.pathname === '/about' &&
          <Grid container direction='row' justify='space-between' className='staffBanner'>
            <Grid item>
              <AdoptButton />
              <DonateButton />
              <VolunteerButton />
            </Grid>
            <Grid item>
              <EmployeePortalButton />
            </Grid>  
        </Grid>   
        }
        {props.location.pathname === '/register' &&
          <Grid container direction='row' justify='space-between' className='staffBanner'>
            <Grid item>
              <AdoptButton />
              <DonateButton />
              <VolunteerButton />
            </Grid>
            <Grid item>
              <AboutButton />
              <EmployeePortalButton />
            </Grid> 
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