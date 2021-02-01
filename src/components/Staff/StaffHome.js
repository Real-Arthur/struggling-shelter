import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ContactSheet from './ContactSheet/ContactSheet';

function StaffHome(props) {

  return (
    <div>
      <h2>People To Be Contacted</h2>
      <ContactSheet />
    </div>
  );
}

export default connect(mapStoreToProps)(StaffHome);
