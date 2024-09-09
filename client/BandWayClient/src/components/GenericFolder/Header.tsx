import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Stack } from '@mui/material';
import { HeaderAppBar, HeaderButton } from '../../styles/ComponentsStyles';
import bandWayLogo from '../../pics/BandWayLogo.png';
import { useNavigate } from 'react-router';
import { Helpers } from "../../helpers/helpers";

const buttons: string[] = ["Search", "Upcoming Events", "How it works", "About Us", "Contact Us", "Sign in"];

const Header: React.FC = () => {
    const navigate = useNavigate();
    const helpers = new Helpers();

    const goToHomePage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/home');
    };

    const goToSignIn = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/sign-in');
    };

    const goToUpcomingEvents = () => {
        navigate('/home');
        setTimeout(() => {
            helpers.scrollToUpcomingEvents();
        }, 100);
    };

    const goToContact = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/contact');
    };

    const goToHowItWorks = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/how-it-works');
    };

    const goToAboutUs = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/about-us');
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
                                ) : button === "Upcoming Events" ? (
                                    <HeaderButton variant='text' onClick={goToUpcomingEvents}>{button}</HeaderButton>
                                ) : button === "How it works" ? (
                                    <HeaderButton variant='text' onClick={goToHowItWorks}>{button}</HeaderButton>
                                ) : button === "About Us" ? (
                                    <HeaderButton variant='text' onClick={goToAboutUs}>{button}</HeaderButton>
                                ) : button === "Contact Us" ? (
                                    <HeaderButton variant='text' onClick={goToContact}>{button}</HeaderButton>
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
