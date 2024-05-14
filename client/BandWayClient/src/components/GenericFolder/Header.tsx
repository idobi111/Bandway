import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { HeaderAppBar, HeaderButton } from '../../styles/ComponentsStyles';
import bandWayLogo from '../../pics/BandWayLogo.png';
import { useNavigate } from 'react-router';

const buttons: string[] = ["Search", "Latest Deals", "Contact", "Login"];

const Header: React.FC = () => {
  const navigate = useNavigate(); // Call useNavigate hook within the component

  const goToHomePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/home');
  };

  return (
    <HeaderAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img onClick={goToHomePage} src={bandWayLogo} alt="Logo" style={{ height: '100px', marginRight: '16px', cursor: 'pointer'}} />
        <div>
          <Grid container spacing={2} alignItems="center">
            {buttons.map((button) =>
              <Grid item key={button}>
                {/* Add onClick event handler to the Search button */}
                {button === "Search" ? (
                  <HeaderButton variant='text' onClick={goToHomePage}>{button}</HeaderButton>
                ) : (
                  <HeaderButton variant='text'>{button}</HeaderButton>
                )}
              </Grid>
            )}
          </Grid>
        </div>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
