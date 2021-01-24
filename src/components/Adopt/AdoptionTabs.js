import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from "@material-ui/core";
import mapStoreToProps from '../../redux/mapStoreToProps';

function AdoptionTabs(props) {
  const [value, setValue] = useState('Cat');

  const handleChange = (newValue) => {
    props.dispatch({
      type: 'FETCH_ANIMALS',
      payload: newValue
    })
  };

  return (
    <Grid>
      <Grid item>
        <Button onClick={() => handleChange('Cat')}>Cat</Button>
        <Button onClick={() => handleChange('Dog')}>Dog</Button>
        <Button onClick={() => handleChange('Snake')}>Snake</Button>
        <Button onClick={() => handleChange('Rabbit')}>Rabbit</Button>
      </Grid>
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionTabs);