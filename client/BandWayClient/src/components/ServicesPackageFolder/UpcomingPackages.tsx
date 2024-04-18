import React, { useEffect, useState } from 'react';
import { Event } from '../../models/Event';
import { Package } from '../../models/Package';
import PackageCard from './PackageCard';


interface UpcomingPackagessProps {
  servicePackages: Package[]; 
}

const UpcomingPackages: React.FC<UpcomingPackagessProps> = ({servicePackages}) => { 

  const step = 6; // Define the step value

  return (
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px' }}> {/* Adjust the max width as needed */}
        <h2 style={{ textAlign: 'left' }}>Best Deals</h2>
        <PackageCard packages={servicePackages} step={step} />
      </div>
    </div>
  );
};

export default UpcomingPackages;
