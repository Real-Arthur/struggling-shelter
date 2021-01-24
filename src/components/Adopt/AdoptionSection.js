import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Container, Typography } from "@material-ui/core";
// Renders the animals depending on which adoption tab is selected
function AdoptionSection(props) {
  return (
    <Grid container direction="row">
      {props.store.animalsReducer.map((animal, i) =>
        <Grid xs={6} container key={i} direction="row" justify="space-between" alignItems="center">
          <Grid style={{maxHeight: '25rem', maxWidth: '15rem'}} container direction="row" justify="space-evenly" alignItems="center">
            <img style={{height: '15rem', width: '15rem'}} src={animal.picture}/>
            <Typography>
              {animal.name}
            </Typography>
            <Typography>
              {animal.age}
            </Typography>
          </Grid>
          <Grid item>
            {animal.personality}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionSection);
