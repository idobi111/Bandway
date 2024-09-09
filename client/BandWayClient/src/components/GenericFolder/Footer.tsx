import React, {useState} from 'react';
import {Grid, Typography, TextField, Button} from '@mui/material';
import {BandWayFooter, ActionButton, FooterTitle, FooterItem, FooterCopyRights} from '../../styles/ComponentsStyles';
import {useNavigate} from "react-router-dom";


import bandWayLogo from '../../pics/BandWayLogo.png';
import { Helpers } from '../../helpers/helpers';


const Footer: React.FC = () => {

    const [isUnsubscribeHovered, setIsUnsubscribeHovered] = useState(false);
    const [isFAQHovered, setIsFAQHovered] = useState(false);
    const [isContactUsHovered, setIsContactUsHovered] = useState(false);
    const [isHowItWorksHovered, setIsHowItWorksHovered] = useState(false);
    const [isAboutUssHovered, setIsAboutUsHovered] = useState(false);


    const navigate = useNavigate();
    const helpers = new Helpers();

    const inputFieldStyle = {
        marginRight: '0.5rem',
    };

    const handleSubscribeNow = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate("/thank-you");
    }

    const handleUnsubsribeLink = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate("/unsubscribe");
    }

    const goToContact = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate("/contact");
    }

    const goToHowItWorks = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate("/how-it-works");
    }

    const goToAboutUs = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        navigate("/about-us");
    }

    const goToFAQ = () => {
        navigate('/how-it-works');
        setTimeout(() => {
            helpers.scrollToFAQ();
        }, 100);
    };

    return (
        <BandWayFooter>
            <Grid container spacing={5}>
                {/* Left Section */}
                <Grid item xs={10} sm={4} md={2}>
                    <div>
                        <img src={bandWayLogo} alt="Logo" style={{height: '80px', marginRight: '16px'}}/>
                        <Typography variant="body2" style={{fontSize: '10px'}}>BandWay is a global self-service ticket &
                            vacation platform for live experiences that allows anyone to discover and attend events that
                            resonate with your musical soul, all while enjoying a curated travel
                            experience.</Typography>
                    </div>
                </Grid>

                <Grid item xs={10} sm={4} md={2}>
                    <FooterTitle>BandWay</FooterTitle>
                    <FooterItem onClick={goToAboutUs}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: isAboutUssHovered ? 'bold' : 'normal',
                                    transition: 'font-weight 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsAboutUsHovered(true)}
                                onMouseLeave={() => setIsAboutUsHovered(false)}>
                        About Us
                    </FooterItem>
                    <FooterItem onClick={goToHowItWorks}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: isHowItWorksHovered ? 'bold' : 'normal',
                                    transition: 'font-weight 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsHowItWorksHovered(true)}
                                onMouseLeave={() => setIsHowItWorksHovered(false)}>
                        How it Works
                    </FooterItem>
                    <FooterItem onClick={goToContact}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: isContactUsHovered ? 'bold' : 'normal',
                                    transition: 'font-weight 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsContactUsHovered(true)}
                                onMouseLeave={() => setIsContactUsHovered(false)}>
                        Contact Us
                    </FooterItem>
                    <FooterItem onClick={goToFAQ}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: isFAQHovered ? 'bold' : 'normal',
                                    transition: 'font-weight 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsFAQHovered(true)}
                                onMouseLeave={() => setIsFAQHovered(false)}>
                        FAQ
                    </FooterItem>
                    <FooterItem onClick={handleUnsubsribeLink}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: isUnsubscribeHovered ? 'bold' : 'normal',
                                    transition: 'font-weight 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsUnsubscribeHovered(true)}
                                onMouseLeave={() => setIsUnsubscribeHovered(false)}>
                        Unsubscribe
                    </FooterItem>
                </Grid>


                <Grid item xs={10} sm={4} md={2}>
                    <FooterTitle>Services</FooterTitle>
                    <FooterItem>Flights</FooterItem>
                    <FooterItem>Hotels</FooterItem>
                    <FooterItem>Car Rentals</FooterItem>
                </Grid>

                <Grid item xs={10} sm={4} md={2}>
                    <FooterTitle>Information</FooterTitle>
                    <FooterItem>Ticketing Terms</FooterItem>
                    <FooterItem>Privacy Terms</FooterItem>
                    <FooterItem>Help Center</FooterItem>
                </Grid>

                <Grid item xs={10} sm={4} md={2}>
                    <FooterTitle>Stay in the loop</FooterTitle>
                    <FooterItem>Join our mailing list to stay in the loop with our newest for Event and
                        concert</FooterItem>
                    <ActionButton variant="contained" color="primary" onClick={handleSubscribeNow}>
                        Subscribe Now
                    </ActionButton>
                </Grid>
            </Grid>
            <FooterCopyRights>Copyright © 2024 Tal Yamin & Ido Bitton</FooterCopyRights>
        </BandWayFooter>
    );
};

export default Footer;
