import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid } from "@material-ui/core";
import AdoptionAnimal from './AdoptionAnimal';
// Renders the animals depending on which adoption tab is selected
function AdoptionSection(props) {
  return (
    <Grid container direction="row">
      {props.store.animalsReducer.map((animal, i) =>
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <AdoptionAnimal
              key={i}
              animal={animal}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionSection);
