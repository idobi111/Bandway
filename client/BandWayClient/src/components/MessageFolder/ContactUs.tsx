import React, { useState } from 'react';
import { Typography, TextField, Box, Stack, CssBaseline, CircularProgress, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { ActionButton } from '../../styles/ComponentsStyles';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { SubscribeApi } from '../../apis/SubscribeApi';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactUs: React.FC = () => {


    return (
        <>
            <CssBaseline />
            <TopContent mainText='Contact Us' subText="" />
            <Box sx={{ textAlign: 'center', margin: 'auto', padding: 8 }}>
                <Stack>
                    <Typography variant="h3" gutterBottom>
                        BandWay Email:
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{padding: 1}}>
                        bandway4@gmail.com
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ paddingTop: 8 }}>
                        BandWay Team:
                    </Typography>
                    <List sx={{ textAlign: 'center', margin: 'auto', padding: 1 }}>
                        <ListItem>
                            <ListItemText primary="Ido Bitton" secondary="Backend Developer" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold' }}
              secondaryTypographyProps={{ fontSize: '1rem' }}/>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/ido-bitton-b8a298163/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Tal Yamin" secondary="Frontend Developer" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold' }}
              secondaryTypographyProps={{ fontSize: '1rem' }}/>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/tal-yamin-5a478a173/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </Stack >
            </Box>
            <Footer />
        </>
    );
};

export default ContactUs;
