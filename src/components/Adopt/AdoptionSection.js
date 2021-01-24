import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid } from "@material-ui/core";

function AdoptionSection(props) {

  return (
    <Grid>
      <ul>
        {props.store.animalsReducer.map((item, i) => {
          return(
            <li key={i}>{item.name}
              {item.breed}
              {item.color}
              <img style={{maxWidth: '300px'}} src={item.picture} />
            </li>
          )
        })}
      </ul>
    </Grid>
  );
}

export default connect(mapStoreToProps)(AdoptionSection);
