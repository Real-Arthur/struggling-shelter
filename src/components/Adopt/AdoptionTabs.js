import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from "@material-ui/core";
import mapStoreToProps from '../../redux/mapStoreToProps';

function AdoptionTabs(props) {
  const [value, setValue] = useState('Cat');
  const animalTypes = ['Cat', 'Dog', 'Rabbit', 'Snake', 'Hamster', 'Mouse', 'Pig', 'Other'];

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