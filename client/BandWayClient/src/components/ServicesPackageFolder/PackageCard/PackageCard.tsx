import React, {useContext, useEffect, useState} from 'react';
import {Divider, CardContent, Typography, Grid, Modal, Box, Stack} from '@mui/material';
import {EventCardStyled, EventCardMediaStyled, LoadMoreButton} from '../../../styles/ComponentsStyles';
import {Package} from '../../../models/Package';
import {Helpers} from '../../../helpers/helpers';
import {FlightService} from '../../../services/FlightService';
import {PackageBuilderService} from '../../../services/PackageBuilderService';
import PackageCardHotelSection from './PackageCardHotelSection';
import PackageCardFlightSection from './PackageCardFlightSection';
import PackageCardImageSection from './PackageCardImageSection';
import PackageCardPriceSection from './PackageCardPriceSection';
import {PackageFilter} from '../../../models/PackageFilter';
import PackageDialog from './PackageDialog/PackageDialog';
import PackageCardCarSection from './PackageCardCarSection';


interface Props {
    packages: Package[];
    step: number; // Step value to determine how many more events to load each time
    packageFilters: PackageFilter;
}

const helpers = new Helpers();
const flightService = new FlightService();
const packageBuilderService = new PackageBuilderService();

const PackageCard: React.FC<Props> = ({packages, step, packageFilters}) => {
    const [visiblePackages, setVisiblePackages] = useState(step); // State to track the number of visible events
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null); // State to track the selected package
    const [openDialog, setOpenDialog] = useState(false); // State to track whether the dialog is open


    const loadMore = () => {
        setVisiblePackages(prevVisiblePackages => prevVisiblePackages + step); // Increase the number of visible events
    };

    const handleCardClick = (servicePackage: Package) => {
        setSelectedPackage(servicePackage);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <>
            <Grid container justifyContent="center" spacing={3}>
                {packages.slice(0, visiblePackages).map(servicesPackage => ( // Slice events based on the visibleEvents state
                    <Grid item xs={12} sm={6} md={4} key={servicesPackage.packageId}
                          onClick={() => handleCardClick(servicesPackage)}> {/* Each card occupies 12 columns on extra small screens, 6 columns on small screens, and 4 columns on medium screens */}
                        <EventCardStyled>
                            <PackageCardImageSection servicesPackage={servicesPackage}></PackageCardImageSection>
                            <CardContent>
                                <Typography variant="h6">
                                    {helpers.formatDate(servicesPackage.hotel?.checkIn)} &middot; {helpers.calculateNumberOfNights(servicesPackage.hotel?.checkIn, servicesPackage.hotel?.checkOut)} nights
                                </Typography>
                                <Divider></Divider>
                                {packageFilters.hotel && (<PackageCardHotelSection
                                    servicesPackage={servicesPackage}></PackageCardHotelSection>)}
                                <Divider></Divider>
                                {packageFilters.flight && servicesPackage.flights && (<PackageCardFlightSection
                                    servicesPackage={servicesPackage}></PackageCardFlightSection>)}
                                <Divider></Divider>
                                {packageFilters.carRental && servicesPackage.carRentals && (
                                    <PackageCardCarSection servicesPackage={servicesPackage}></PackageCardCarSection>)}
                                <Divider></Divider>
                                <PackageCardPriceSection servicesPackage={servicesPackage}
                                                         packageFilters={packageFilters}></PackageCardPriceSection>
                            </CardContent>
                        </EventCardStyled>
                    </Grid>
                ))}
            </Grid>
            {visiblePackages < packages.length && ( // Render the "Load More" button if there are more events to load
                <div style={{textAlign: 'center', marginTop: '20px', paddingBottom: '20px'}}>
                    <LoadMoreButton variant="outlined" onClick={loadMore}>
                        Load More
                    </LoadMoreButton>
                </div>
            )}
            {/* Dialog Component */}
            <Modal open={openDialog} onClose={handleCloseDialog}
                   sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    width: '80%',
                    maxWidth: '1200px',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px'
                }}>
                    <PackageDialog servicesPackage={selectedPackage} packageFilters={packageFilters}/>
                </Box>
            </Modal>


        </>
    );
};

export default PackageCard;
