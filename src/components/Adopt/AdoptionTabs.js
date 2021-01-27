import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, AppBar, Typography } from "@material-ui/core";
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Adopt.css';
// Holds tabs for animal type selection
function AdoptionTabs(props) {
  // Selecting a different tab changes the animal type viewed
  const [value, setValue] = useState(0);
  const animalTypes = ['Cat', 'Dog', 'Rabbit', 'Snake', 'Hamster', 'Mouse', 'Pig', 'Other'];
  // starts the fetch saga which gets animals of selected type
  // from the database
  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    let animalsToFind = animalTypes[newValue]
    setValue(newValue)
    // fetches by animal id
    props.dispatch({
      type: 'FETCH_ANIMALS',
      payload: animalsToFind
    })
  };
  return (
    <>
    <Typography style={{paddingLeft: '1em'}} variant='h6'>Interested in a new friend? Press a tab to search pets by type:</Typography>
    <AppBar position='static' style={{backgroundColor: '#2374AB'}}>
      <Tabs 
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        variant='scrollable'
        scrollButtons='auto'
      >
        {animalTypes.map((animal, i) =>
          <Tab key={i} label={animal} />
        )}
      </Tabs>
    </AppBar>
    </>
  );
}

export default connect(mapStoreToProps)(AdoptionTabs);