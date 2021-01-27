import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Stand in Donation page
function Donate() {
  return (
    <div>
      <h2>Donate</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter((Donate)));