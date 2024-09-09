import React from 'react';
import { Typography, Box, Stack, CssBaseline, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';

const HowItWorks: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <TopContent mainText="How it works" subText="" />
            <Box sx={{ margin: 'auto', padding: 15 }}>
                <Stack>
                    <Typography variant="h3" gutterBottom>
                        How it works?
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                        BandWay simplifies concert vacation planning by combining event searches, ticket purchases, and travel bookings in one place.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                        Start by searching for concerts by performer or browse upcoming events. You can also enter your location and destination to get tailored travel suggestions. After finding a concert, purchase tickets via an external link, and you’ll be prompted to create a personalized vacation package.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                        BandWay offers hotel, flight, and car rental options based on the concert’s location. You can customize your package by adjusting travel dates, budget, and preferences. Once you’ve made your selections, you’ll be redirected to complete the bookings on respective sites.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                        Create an account to save your preferences. You can also subscribe to our newsletter for updates or unsubscribe at any time.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ padding: 1 }}>
                        BandWay streamlines the process, ensuring a seamless experience for both concert planning and vacation management.
                    </Typography>

                    <Typography variant="h3" gutterBottom sx={{ paddingTop: 8 }} id="FAQ" >
                        Frequently Asked Questions (FAQ)
                    </Typography>

                    {faqData.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-header-${index}`}
                            >
                                <Typography variant="subtitle1">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Box>
            <Footer />
        </>
    );
};

// FAQ data for easy reuse
const faqData = [
    {
        question: "1. What is BandWay?",
        answer: "BandWay is a concert vacation planning platform that helps you search for concerts, purchase tickets, and build custom travel packages, including hotels, flights, and car rentals."
    },
    {
        question: "2. How do I search for concerts?",
        answer: "You can search for concerts by entering the performer’s name in the search bar or by browsing upcoming events on the homepage."
    },
    {
        question: "3. How do I book a vacation package?",
        answer: "After purchasing a concert ticket, BandWay will provide suggestions for vacation packages, including hotels, flights, and car rentals. You can customize your package and book your selections through the linked external sites."
    },
    {
        question: "4. Can I customize my vacation package?",
        answer: "Yes, you can adjust your package based on your preferred travel dates, budget, hotel, flight, and car rental options."
    },
    {
        question: "5. How do I manage my account?",
        answer: "Once you sign up or log in, we can fit to you results according to your preferences, and update you regarding relevant events and vacations. Your name will also appear in the header for easy access."
    },
    {
        question: "6. How do I buy concert tickets?",
        answer: "After searching for a concert, click the ticket link on the event page, which will redirect you to a third-party site to complete your purchase."
    },
    {
        question: "7. Is my payment information stored on BandWay?",
        answer: "No, BandWay does not store your payment information. All ticket purchases and bookings are handled through external providers."
    },
    {
        question: "8. Can I receive updates on upcoming concerts?",
        answer: "Yes, you can subscribe to our newsletter to get email updates about upcoming concerts and special offers."
    },
    {
        question: "9. How do I unsubscribe from the newsletter?",
        answer: "You can unsubscribe from the newsletter at any time by clicking the 'Unsubscribe' link in the email or through your account settings."
    },
    {
        question: "10. Who do I contact for support?",
        answer: "If you need assistance, feel free to contact our support team at bandway4@gmail.com."
    }
];

export default HowItWorks;
