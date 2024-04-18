import React, { useState } from 'react';
import { Typography, Box, Popover, Slider, Button } from '@mui/material';
import { SearchTextField } from '../../styles/ComponentsStyles';

const ServicesBudgetPopover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [budget, setBudget] = useState<[number, number]>([100, 3000]);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    handleClose();
  };

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setBudget(newValue as [number, number]);
  };

  return (
    <div>
      <Typography>
        Services Budget
      </Typography>
      <SearchTextField
        onClick={handleClick}
        value={`${budget[0]}$-${budget[1]}$`}
        style={{ width: '150px' }}
        placeholder="100$-3000$"
        variant="standard"
        InputLabelProps={{
          style: { color: 'gray' },
          shrink: false
        }}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Typography id="budget-slider" gutterBottom>
            budget range
          </Typography>
          <Slider
            value={budget}
            onChange={handleChange}
            min={100}
            max={3000}
            step={100}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => {
              if (Array.isArray(value)) {
                return `${value[0]}$-${value[1]}$`;
              }
              return `${value}$`;
            }}
            aria-labelledby="budget-slider"
          />
          <Button onClick={handleSave}>Save</Button>
        </Box>
      </Popover>
    </div>
  );
};

export default ServicesBudgetPopover;
