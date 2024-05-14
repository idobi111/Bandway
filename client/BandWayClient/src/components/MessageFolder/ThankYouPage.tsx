import React, { useState } from 'react';
import { Typography, TextField, Button, Box, CssBaseline, Stack } from '@mui/material';
import { ActionButton } from '../../styles/ComponentsStyles';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';

const ThankYouPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Validate email format
    const isValid = /\S+@\S+\.\S+/.test(value);
    setIsValidEmail(isValid);
  };

  const handleSubscribe = () => {
    console.log(email);
    setEmail(''); // Clear the input field after subscribing
  };

  return (
    <>
      <CssBaseline />
      <TopContent mainText='Thank you for using BandWay' subText=''></TopContent>
      <Box sx={{ textAlign: 'center', margin: 'auto', padding: 8 }}>
        <Stack>
          <Typography variant="h3" gutterBottom>
            Let's stay connected.
          </Typography>
          <Typography variant="h5" gutterBottom>
            We recommend subscribing to stay updated with more events and vacation packages.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <TextField
                type="email"
                label="Enter your email"
                variant="outlined"
                value={email}
                onChange={handleInputChange}
                error={!isValidEmail}
                helperText={!isValidEmail ? "Please enter a valid email address" : ""}
                sx={{ mr: 1, width: '300px' }}
              />
              <ActionButton variant="contained" onClick={handleSubscribe} disabled={!isValidEmail || !email.trim()} sx={{ mb: 3 }}>
                Subscribe
              </ActionButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default ThankYouPage;
