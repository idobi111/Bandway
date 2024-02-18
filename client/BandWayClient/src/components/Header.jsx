import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

import bandWayLogo from '../pics/BandWayLogo.png';

const buttons = ["Search", "Latest Deals", "Contact", "Login"];

const Header = () => {

  const HeaderAppBar = styled(AppBar)({
    width: '100%',
    backgroundColor: '#4B0082',
    height: '20%'
  });

  const HeaderButton = styled(Button)({
    color: 'white'
  })

  
  
  return (
    <HeaderAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={bandWayLogo} alt="Logo" style={{ height: '100px', marginRight: '16px' }} />
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
    </HeaderAppBar>
  );
};

export default Header;