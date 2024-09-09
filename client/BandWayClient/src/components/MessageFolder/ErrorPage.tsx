import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import { ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from 'react-router';

const ErrorPage: React.FC = () => {

    const navigate = useNavigate();

    const handleBackToHomePage = () => {
        navigate("/home");
    }


    return (
        <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Header />
            <Box sx={{ textAlign: 'center', marginTop: '100px', flex: '1' }}>
                <Typography variant="h2">Oops! Something went wrong.</Typography>
                <Typography variant="h5" sx={{ marginTop: '20px' }}>
                    Please try again later. If the issue persists, let us know via email:
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
                    bandway4@gmail.com
                </Typography>
                <ActionButton variant='contained' onClick={handleBackToHomePage}
                    style={{ width: '350px', height: '80px' }}>Back to Home Page</ActionButton>
            </Box>
            <Footer />
        </Box>
    );
};

export default ErrorPage;
