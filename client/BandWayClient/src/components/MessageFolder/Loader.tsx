import React from 'react';
import Typography from '@mui/material/Typography';
import { CircularProgress, Stack } from '@mui/material';

interface LoaderProps {
    loadingMessage: string;
  }
const Loader: React.FC<LoaderProps> = ({loadingMessage}) => {
    return (
        <Stack display='flex' justifyContent={'center'} alignItems={'center'} sx={{m: 8}}>
        <Typography variant="h4" color="textSecondary">
          {loadingMessage}
        </Typography>
          <CircularProgress size={80} sx={{ m: '25px' }} />
      </Stack>
    );
};

export default Loader;
