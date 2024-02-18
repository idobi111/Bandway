import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

import bandWayLogo from '../pics/BandWayLogo.png';
import bandPic from '../pics/BandPic.png';


const buttons = ["Search", "Latest Deals", "Contact", "Login"];

const Header = () => {

  const HeaderAppBar = styled(AppBar)({
    width: '100%',
    backgroundColor: 'purple',
    height: '60%'
  });

  const HeaderButton = styled(Button)({
    color: 'white'
  })
  
  return (
    <HeaderAppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={bandWayLogo} alt="Logo" style={{ height: '200px', marginRight: '16px', marginTop:'100px' }} />
        <div>
          <Grid container spacing={2} justify="center">
            {buttons.map((button) =>
              <Grid item key={button}>
                <HeaderButton variant='text'>{button}</HeaderButton>
              </Grid>
            )}
          </Grid>
        </div>
      </Toolbar>
      <img src={bandPic} style={{ height: '100%', width: '25%', marginLeft: '300px' }} />   
    </HeaderAppBar>
  );
};

export default Header;