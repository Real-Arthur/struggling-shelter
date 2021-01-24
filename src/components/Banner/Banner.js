import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

function NavLinks(props) {
  const homeButton = () => {
    props.history.push('/')
  }
  return (
    <Box>
        <Typography variant="h2">Animal Shelter</Typography>
    </Box>
  );
};

export default connect()(withRouter(NavLinks));