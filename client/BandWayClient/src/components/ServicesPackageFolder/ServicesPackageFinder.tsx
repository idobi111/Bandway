import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import { EventApi } from '../../apis/EventApi';
import { Event } from '../../models/EventResponse';
import TopContent from '../GenericFolder/TopContent';
import PackageSearch from './PackageSearch';
import UpcomingPackages from './UpcomingPackages';
import { Package } from '../../models/Package';
import { packagesMock } from '../../mocks/PackageMock';

const ServicesPackageFinder: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const mainText:string = "Services Package Finder";
  const subText:string = "Explore our comprehensive service package finder for a complete and enhanced experience !";

 0
  useEffect(() => {
  
            // setPackages(packagesMock)

    
  }, []);
 
  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText={mainText} subText={subText}/>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
        <PackageSearch/>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
          {/* <Steps /> */}
        </Box>
        <Box display="flex" justifyContent="center">
        <UpcomingPackages servicePackages={packages} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPackageFinder;
