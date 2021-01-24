import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Stand in Volunteer page
function Volunteer(props) {
  const [heading, setHeading] = useState('Volunteer');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter((Volunteer)));