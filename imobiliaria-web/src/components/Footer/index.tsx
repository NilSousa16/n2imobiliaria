import React from 'react';

import { Paper, Button, AppBar, Container, Toolbar, Typography, makeStyles } from '@material-ui/core';

import { Title } from './styled';

// https://www.codegrepper.com/code-examples/whatever/material+ui+footer

const Footer: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      color="primary" 
      style={{
        backgroundColor: "#400CCC", 
        width:'100%', 
        marginBottom:'0',
        marginTop: '20px',
      }}>
      <Container>
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