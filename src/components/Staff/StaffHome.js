import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ContactSheet from './ContactSheet/ContactSheet';
import LogOutButton from './LogOutButton';

function StaffHome(props) {
  const [heading, setHeading] = useState('Staff Home');

  return (
    <div>
      <h2>{heading}</h2>
      <ContactSheet />
      <LogOutButton />
    </div>
  );
}

export default connect(mapStoreToProps)(StaffHome);
