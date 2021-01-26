import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid } from "@material-ui/core";
import AdoptionAnimal from './AdoptionAnimal';
// Renders the animals depending on which adoption tab is selected
function AdoptionSection(props) {
  return (
    <Grid container direction="row">
      {props.store.animalsReducer.map((animal, i) =>
        <Grid xs={12} sm={6} md={4} lg={3} container key={i} direction="row" justify="space-around" alignItems="center">
          <AdoptionAnimal
          key={i}
          id={animal.id}
          name={animal.name}
          breed={animal.breed}
          color={animal.color}
          coat_length={animal.coat_length}
          age={animal.age}
          sex={animal.sex}
          size={animal.size}
          personality={animal.personality}
          house_trained={animal.house_trained}
          vaccinated={animal.vaccinated}
          neutered={animal.neutered}
          price={animal.price}
          picture={animal.picture}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionSection);
