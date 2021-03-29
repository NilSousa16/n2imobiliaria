import React from 'react';

import { Paper, Button, AppBar, Container, Toolbar, Typography, makeStyles } from '@material-ui/core';

import { Title } from './styled';

// https://www.codegrepper.com/code-examples/whatever/material+ui+footer

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary" style={{width:'100%'}}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 N2Software
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
};

export default Footer;