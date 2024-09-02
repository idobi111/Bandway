import React from 'react';
import {AppBar, Toolbar, Typography, Button, Container, Grid, Stack} from '@mui/material';
import {HeaderAppBar, HeaderButton} from '../../styles/ComponentsStyles';
import bandWayLogo from '../../pics/BandWayLogo.png';
import {useNavigate} from 'react-router';
import {Helpers} from "../../helpers/helpers";

const buttons: string[] = ["Search", "Latest Deals", "Contact", "Sign in"];

const Header: React.FC = () => {
    const navigate = useNavigate();
    const helpers = new Helpers();

    const goToHomePage = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate('/home');
    };

    const goToSignIn = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate('/sign-in');
    };

    const goToLatestDeals = () => {
        navigate('/home');
        setTimeout(() => {
            helpers.scrollToUpcomingEvents();
        }, 100);
    };

    const handleLogout = () => {
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        localStorage.removeItem('userId');
        goToHomePage();
    };

    const userFirstName = localStorage.getItem('userFirstName');
    const userLastName = localStorage.getItem('userLastName');

    return (
        <HeaderAppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img onClick={goToHomePage} src={bandWayLogo} alt="Logo"
                     style={{ height: '100px', marginRight: '16px', cursor: 'pointer' }} />
                <div>
                    <Grid container spacing={2} alignItems="center">
                        {buttons.map((button) =>
                            <Grid item key={button}>
                                {button === "Search" ? (
                                    <HeaderButton variant='text' onClick={goToHomePage}>{button}</HeaderButton>
                                ) : button === "Latest Deals" ? (
                                    <HeaderButton variant='text' onClick={goToLatestDeals}>{button}</HeaderButton>
                                ) : button === "Sign in" ? (
                                    userFirstName && userLastName ? (
                                        <Stack direction="row" spacing={2}>
                                            <HeaderButton variant="text" onClick={handleLogout}>
                                                Logout
                                            </HeaderButton>
                                            <HeaderButton
                                                variant='text'
                                                disabled
                                                sx={{
                                                    color: 'white',
                                                    '&:disabled': { color: 'white', cursor: 'not-allowed' }
                                                }}
                                            >
                                                <Stack direction="column" spacing={0.5}>
                                                    <Typography variant="body1">
                                                        {userFirstName}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {userLastName}
                                                    </Typography>
                                                </Stack>
                                            </HeaderButton>
                                        </Stack>
                                    ) : (
                                        <HeaderButton variant='text' onClick={goToSignIn}>{button}</HeaderButton>
                                    )
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
