import React, {useState} from 'react';
import {Typography, Box, Popover, Slider, Button} from '@mui/material';
import {SearchTextField} from '../../styles/ComponentsStyles';


interface ServicesBudgetPopoverProps {
    onSelect: (minPrice: number, maxPrice: number) => void;
}

const ServicesBudgetPopover: React.FC<ServicesBudgetPopoverProps> = ({onSelect}) => {
    const minBudget: number = 100;
    const maxBudget: number = 10000;
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [budget, setBudget] = useState<[number, number]>([minBudget, maxBudget]);
    const [selectedBudget, setSelectedBudget] = useState<string>('');

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSave = () => {
        setSelectedBudget(`${budget[0]}$-${budget[1]}$`);
        onSelect(budget[0], budget[1]);
        handleClose();
    };

    const handleReset = () => {
        setBudget([minBudget, maxBudget]);
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
                    <Slider
                        value={budget}
                        onChange={handleChange}
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
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleSave}>Save</Button>
                </Box>
            </Popover>
        </div>
    );
};

export default ServicesBudgetPopover;
