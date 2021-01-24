import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, MenuList, MenuItem, Button } from '@material-ui/core';

function NavLinks(props) {
  const homeButton = () => {
    props.history.push('/')
  }
  return (
    <Box>
        <MenuList>
         <MenuItem><Button onClick={()=>homeButton}>Home</Button></MenuItem>
        </MenuList>
    </Box>
  );
};

export default connect()(withRouter(NavLinks));
