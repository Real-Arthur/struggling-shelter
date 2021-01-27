import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Box } from "@material-ui/core";
import AdoptionTabs from './AdoptionTabs';
import AdoptionSection from './AdoptionSection';
// Holds the adoption tabs and
// adoption section which holds rendered info about the animals
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