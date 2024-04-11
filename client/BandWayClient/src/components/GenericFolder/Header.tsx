import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { HeaderAppBar, HeaderButton } from '../../styles/ComponentsStyles';

import bandWayLogo from '../../pics/BandWayLogo.png';

const buttons: string[] = ["Search", "Latest Deals", "Contact", "Login"];

const Header: React.FC = () => {
  
  return (
    <HeaderAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={bandWayLogo} alt="Logo" style={{ height: '100px', marginRight: '16px' }} />
        <div>
          <Grid container spacing={2} alignItems="center">
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
