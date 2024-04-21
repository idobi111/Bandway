import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import UpcomingPackages from './UpcomingPackages';
import { Package } from '../../models/Package';
import { packagesMock } from '../../mocks/PackageMock';

const PackageSearchResults: React.FC = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const mainText: string = "We found the best results for you...";
    const subText: string = "We're here to craft a vacation that perfectly suits you.";

    0
    useEffect(() => {

        setPackages(packagesMock)


    }, []);

    return (
        <>
            <CssBaseline />
            <Header />
            <TopContent mainText={mainText} subText={subText} />
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="center">
                    <UpcomingPackages servicePackages={packages} />
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default PackageSearchResults;
