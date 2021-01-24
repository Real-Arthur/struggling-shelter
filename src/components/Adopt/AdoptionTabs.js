import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from "@material-ui/core";
import mapStoreToProps from '../../redux/mapStoreToProps';
// Holds tabs for animal type selection
function AdoptionTabs(props) {
  // Selecting a different tab changes the animal type viewed
  const [value, setValue] = useState('Cat');
  const animalTypes = ['Cat', 'Dog', 'Rabbit', 'Snake', 'Hamster', 'Mouse', 'Pig', 'Other'];
  // starts the fetch saga which gets animals of selected type
  // from the database
  const handleChange = (newValue) => {
    props.dispatch({
      type: 'FETCH_ANIMALS',
      payload: newValue
    })
  };
  return (
    <Grid container justify="space-evenly">
        {animalTypes.map((animal, i) => 
          <Grid key={i} item>
            <Button onClick={() => handleChange(animal)}>{animal}</Button>
          </Grid>
        )}
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionTabs);