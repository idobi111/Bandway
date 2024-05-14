import React, { useState } from 'react';
import { Typography, TextField, Box, Stack, CssBaseline, CircularProgress } from '@mui/material';
import { ActionButton } from '../../styles/ComponentsStyles';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { SubscribeApi } from '../../apis/SubscribeApi';

const UnsubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const subscribeApi = new SubscribeApi();
  const [unsubscribeStatus, setUnsubscribeStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Validate email format
    const isValid = /\S+@\S+\.\S+/.test(value);
    setIsValidEmail(isValid);
  };

  const handleUnsubscribe = async (userMail: string) => {
    setLoading(true);
    try {
      await subscribeApi.unsubscribe(userMail);
      setUnsubscribeStatus('Unsubscribed successfully');
    } catch (error) {
      console.error('Error unsubscribe mail:', error);
      setUnsubscribeStatus('The Unsubscription has failed. Please try again or contact us via mail: support@bandway.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <TopContent mainText='You will be missed.' subText='' />
      <Box sx={{ textAlign: 'center', margin: 'auto', padding: 8 }}>
        <Stack>
          <Typography variant="h3" gutterBottom>
            Are you sure you want to go ? 
          </Typography>
          <Typography variant="h5" gutterBottom>
            We recommend to stay subsctribed to get updates with more events and vacation packages.
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
                  onClick={() => handleUnsubscribe(email)}
                  disabled={!isValidEmail || !email.trim()}
                  sx={{ mb: 3 }}
                >
                  Unsubscribe
                </ActionButton>
              ) : (
                <CircularProgress />
              )}
            </Stack>
          </Box>
          {unsubscribeStatus && (
            <Typography variant="body1" color={unsubscribeStatus.startsWith('Unsubscribed') ? 'success' : 'error'}>
              {unsubscribeStatus}
            </Typography>
          )}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default UnsubscribePage;
