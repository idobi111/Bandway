import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {Grid, Typography, Box, Popover, Slider, Button } from '@mui/material';
import { SearchTextField } from '../../styles/ComponentsStyles';

interface ServicesBudgetPopoverProps {
    onSelect: (minHotelPrice: number, maxHotelPrice: number,minFlightPrice: number, maxFlightPrice: number,minCarPrice: number, maxCarPrice: number) => void;
}

const ServicesBudgetPopover = forwardRef<{ resetSelectedBudget: () => void }, ServicesBudgetPopoverProps>(
    ({ onSelect }, ref) => {
        const minBudget: number = 100;
        const maxBudget: number = 10000;
        const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
        const [carBudget, setCarBudget] = useState<[number, number]>([minBudget, maxBudget]);
        const [flightBudget, setFlightBudget] = useState<[number, number]>([minBudget, maxBudget]);
        const [hotelBudget, setHotelBudget] = useState<[number, number]>([minBudget, maxBudget]);
        const [selectedBudget, setSelectedBudget] = useState<string>('');

        useImperativeHandle(ref, () => ({
            resetSelectedBudget() {
                setHotelBudget([minBudget, maxBudget]);
                setFlightBudget([minBudget, maxBudget]);
                setCarBudget([minBudget, maxBudget]);
                setSelectedBudget(``);
            }
        }));

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

    const handleSave = () => {
        setSelectedBudget(`Hotel: ${hotelBudget[0]}$-${hotelBudget[1]}$, Flight: ${flightBudget[0]}$-${flightBudget[1]}$, Car: ${carBudget[0]}$-${carBudget[1]}$`);
        onSelect(hotelBudget[0], hotelBudget[1],flightBudget[0], flightBudget[1],carBudget[0], carBudget[1]);
        handleClose();
    };

    const handleReset = () => {
        setCarBudget([minBudget, maxBudget]);
        setFlightBudget([minBudget, maxBudget]);
        setHotelBudget([minBudget, maxBudget]);
        setSelectedBudget(`${minBudget}$-${maxBudget}$`);
    };

    const handleCarChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setCarBudget(newValue as [number, number]);
    };
    const handleFlightChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setFlightBudget(newValue as [number, number]);
    };
    const handleHotelChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setHotelBudget(newValue as [number, number]);
    };

    return (
        <div>
            <Typography>
                Services Budget
            </Typography>
            <SearchTextField
                onClick={handleClick}
                value={selectedBudget}
                style={{width: '150px'}}
                placeholder="Select Budget"
                variant="standard"
                InputLabelProps={{
                    style: {color: 'gray'},
                    shrink: false
                }}
            />
            <Popover
                id={id}
                open={open}
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
                <Box p={4}>
                    <Typography id="budget-slider" gutterBottom>
                        Budget Range
                    </Typography>

                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography>Hotel:</Typography>
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={hotelBudget}
                                onChange={handleHotelChange}
                                min={minBudget}
                                max={maxBudget}
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
                        </Grid>
                    </Grid>

                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography>Flight:</Typography>
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={flightBudget}
                                onChange={handleFlightChange}
                                min={minBudget}
                                max={maxBudget}
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
                        </Grid>
                    </Grid>

                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography>Car:</Typography>
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={carBudget}
                                onChange={handleCarChange}
                                min={minBudget}
                                max={maxBudget}
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
                        </Grid>
                    </Grid>

                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleSave}>Save</Button>
                </Box>
            </Popover>
        </div>
    );
};

export default ServicesBudgetPopover;
