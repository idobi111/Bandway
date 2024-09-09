import React from 'react';
import { Typography, Box, Stack, CssBaseline, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';

const AboutUs: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <TopContent mainText="About Us" subText="" />
            <Box sx={{ margin: 'auto', padding: 15 }}>
                <Stack>
                    <Typography variant="h3" gutterBottom>
                         About Us
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                    At BandWay, our passion for music and travel fuels everything we do. The idea for BandWay was born from a personal experience, shared by our co-founder, Ido Bitton.</Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                    Ido and his wife were on their honeymoon in the USA, excited to explore the country and attend concerts of their favorite bands and artists along the way. However, they quickly realized there wasn't an easy way to find events and plan their journey around live music. The frustration of not finding a solution sparked an idea.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                    Ido shared his experience with his friend Tal, and together, they decided to build what was missing — a platform that could combine music, travel, and personal passion into one seamless experience. And thus, BandWay was born.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                    Our mission is simple: to help music lovers plan their perfect trips by connecting them with the concerts and events they want to attend, while making travel easy and enjoyable. Whether you’re looking to plan a road trip centered around your favorite artists or just find a concert while on vacation, BandWay is here to make it happen.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                    Join us, and let’s make unforgettable memories together with BandWay — your ultimate concert and travel companion.
                    </Typography>
                </Stack>
            </Box>
            <Footer />
        </>
    );
};

export default AboutUs;
