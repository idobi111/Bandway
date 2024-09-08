import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Button, Popover, Typography, Badge, IconButton, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {SearchTextField} from '../../styles/ComponentsStyles';

interface OccupancyPopoverProps {
    onSelect: (adults: number, children: number, rooms: number) => void;
}

const OccupancyPopover = forwardRef<{ resetSelectedOccupancy: () => void }, OccupancyPopoverProps>(({onSelect}, ref) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [adults, setAdults] = useState<number>(2);
    const [children, setChildren] = useState<number>(0);
    const [rooms, setRooms] = useState<number>(1);
    const [selectedOccupancy, setSelectedOccupancy] = useState<string>('');

    useImperativeHandle(ref, () => ({
        resetSelectedOccupancy() {
            setSelectedOccupancy('');
        }
    }));

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl((event.currentTarget as unknown) as HTMLButtonElement | null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSave = () => {
        setSelectedOccupancy(`${adults} adults, ${children} children, ${rooms} rooms`);
        onSelect(adults, children, rooms);
        handleClose();
    };

    const handleReset = () => {
        setAdults(2);
        setChildren(0);
        setRooms(1);
    };

    const handleAdultsChange = (amount: number) => {
        setAdults(Math.max(0, adults + amount));
    };

    const handleChildrenChange = (amount: number) => {
        setChildren(Math.max(0, children + amount));
    };

    const handleRoomsChange = (amount: number) => {
        setRooms(Math.max(0, rooms + amount));
    };

    return (
        <div>
            <Typography>Occupancy</Typography>
            <SearchTextField
                onClick={handleClick}
                value={selectedOccupancy}
                style={{width: '150px'}}
                placeholder="Select Occupancy"
                variant="standard"
                InputLabelProps={{style: {color: 'gray'}, shrink: false}}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Box p={2}>
                    <Typography>Adults:</Typography>
                    <IconButton onClick={() => handleAdultsChange(-1)}><RemoveIcon/></IconButton>
                    <Badge badgeContent={adults} color="primary"/>
                    <IconButton onClick={() => handleAdultsChange(1)}><AddIcon/></IconButton>
                    <br/>
                    <Typography>Children:</Typography>
                    <IconButton onClick={() => handleChildrenChange(-1)}><RemoveIcon/></IconButton>
                    <Badge badgeContent={children} color="primary"/>
                    <IconButton onClick={() => handleChildrenChange(1)}><AddIcon/></IconButton>
                    <br/>
                    <Typography>Rooms:</Typography>
                    <IconButton onClick={() => handleRoomsChange(-1)}><RemoveIcon/></IconButton>
                    <Badge badgeContent={rooms} color="primary"/>
                    <IconButton onClick={() => handleRoomsChange(1)}><AddIcon/></IconButton>
                    <br/>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleSave}>Save</Button>
                </Box>
            </Popover>
        </div>
    );
});

export default OccupancyPopover;
