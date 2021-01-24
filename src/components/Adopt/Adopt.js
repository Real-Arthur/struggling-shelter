import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Box, AppBar, Grid, GridItem } from "@material-ui/core";
import AdoptionTabs from './AdoptionTabs';
import AdoptionSection from './AdoptionSection';

class Adopt extends Component {

  render() {
    return (
      <Box>
        <AdoptionTabs />
        <AdoptionSection />
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(Adopt);