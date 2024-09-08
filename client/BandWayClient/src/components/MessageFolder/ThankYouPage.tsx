import React, { useState } from 'react';
import { Typography, TextField, Box, Stack, CssBaseline, CircularProgress } from '@mui/material';
import { ActionButton } from '../../styles/ComponentsStyles';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { SubscribeApi } from '../../apis/SubscribeApi';

const ThankYouPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const subscribeApi = new SubscribeApi();
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Validate email format
    const isValid = /\S+@\S+\.\S+/.test(value);
    setIsValidEmail(isValid);
  };

  const handleSubscribe = async (userMail: string) => {
    setLoading(true);
    try {
      await subscribeApi.subscribe(userMail);
      setSubscribeStatus('Subscribed successfully');
    } catch (error) {
      console.error('Error subscribe mail:', error);
      setSubscribeStatus('The Subscription has failed. Please try again or contact us via mail: bandway4@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <TopContent mainText='Thank you for using BandWay' subText='' />
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
                helperText={!isValidEmail ? 'Please enter a valid email address' : ''}
                sx={{ mr: 1, width: '300px' }}
              />
              {!loading ? (
                <ActionButton
                  variant="contained"
                  onClick={() => handleSubscribe(email)}
                  disabled={!isValidEmail || !email.trim()}
                  sx={{ mb: 3 }}
                >
                  Subscribe
                </ActionButton>
              ) : (
                <CircularProgress />
              )}
            </Stack>
          </Box>
          {subscribeStatus && (
            <Typography variant="body1" color={subscribeStatus.startsWith('Subscribed') ? 'success' : 'error'}>
              {subscribeStatus}
            </Typography>
          )}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default ThankYouPage;
