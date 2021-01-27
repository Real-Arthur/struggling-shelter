import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Stand in Volunteer page
function Volunteer() {
  return (
    <div>
      <h2>Volunteer</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter((Volunteer)));