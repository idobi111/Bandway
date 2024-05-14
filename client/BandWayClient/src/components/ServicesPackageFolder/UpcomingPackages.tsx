import React, { useEffect, useState } from 'react';
import { Package } from '../../models/Package';
import PackageCard from './PackageCard/PackageCard';
import { PackageFilter } from '../../models/PackageFilter';
import { Stack, Button, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';

interface UpcomingPackagesProps {
  servicePackages: Package[];
}

const UpcomingPackages: React.FC<UpcomingPackagesProps> = ({ servicePackages }) => {
  const step = 6; // Define the step value
  const defaultPackageFilters: PackageFilter = {
    hotel: true,
    flight: false,
    carRental: false,
    taxi: false,
  };
  const [packageFilters, setPackageFilters] = useState<PackageFilter>(defaultPackageFilters);

  const handleFilterClick = (filter: keyof PackageFilter) => {
    setPackageFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  // const checkPackageHotelsExist = () => {
  //   return !servicePackages.every((servPack) => servPack.hotel == null || servPack.hotel == undefined);
  // };

  return (
    <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px' }}>
        {/* Filter buttons */}
        <Stack direction="row" spacing={2} mb={2}>
          <Typography variant='h5'> Filters: </Typography>
          <Button
            // disabled={checkPackageHotelsExist()}
            variant="contained"
            onClick={() => handleFilterClick('hotel')}
            sx={{ borderRadius: '20px', backgroundColor: packageFilters.hotel ? '#FF1493' : '#A9A9A9' }}
          >
            Hotel {packageFilters.hotel && <Check />}
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterClick('flight')}
            sx={{ borderRadius: '20px', backgroundColor: packageFilters.flight ? '#FF1493' : '#A9A9A9' }}
          >
            Flight {packageFilters.flight && <Check />}
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterClick('carRental')}
            sx={{ borderRadius: '20px', backgroundColor: packageFilters.carRental ? '#FF1493' : '#A9A9A9' }}
          >
            Car Rental {packageFilters.carRental && <Check />}
          </Button>
          {/* <Button
            variant="contained"
            onClick={() => handleFilterClick('taxi')}
            sx={{ borderRadius: '20px', backgroundColor: packageFilters.taxi ? '#FF1493' : '#A9A9A9' }}
          >
            Taxi {packageFilters.taxi && <Check />}
          </Button> */}

        </Stack>
        {/* Package card */}
        <h2 style={{ textAlign: 'left' }}>Best Deals</h2>
        { servicePackages.length > 0 ? (   <PackageCard packages={servicePackages} step={step} packageFilters={packageFilters}/>) : ( <p>Loading packages...</p> )}
      </div>
    </div>
  );
};

export default UpcomingPackages;
