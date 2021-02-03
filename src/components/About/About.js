import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

function About() {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter((About)));
