import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Stack, Typography, Box, Popover, Button} from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {SearchTextField} from '../../styles/ComponentsStyles';

interface DatePickerPopoverProps {
    onSelect: (checkIn: string, checkOut: string) => void;
}

const DatePickerPopover = forwardRef(({onSelect}: DatePickerPopoverProps, ref) => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [selectedText, setSelectedText] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    // Expose a reset method through the ref
    useImperativeHandle(ref, () => ({
        resetSelectedText() {
            setSelectedText('');
            setStartDate(null);
            setEndDate(null);
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
        if (startDate && endDate) {
            const formattedStartDate = startDate.toLocaleDateString();
            const formattedEndDate = endDate.toLocaleDateString();
            setSelectedText(`${formattedStartDate} - ${formattedEndDate}`);
            onSelect(formattedStartDate, formattedEndDate);
        } else {
            setSelectedText('');
            onSelect('', '');
        }
        handleClose();
    };

    return (
        <div>
            <Typography>
                Services Date Range
            </Typography>
            <SearchTextField
                onClick={handleClick}
                value={selectedText}
                style={{width: '150px'}}
                placeholder="Select Date Range"
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
                <Box p={5} sx={{minHeight: '300px', maxHeight: '1000px'}}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Typography p={1}>
                                Start Date
                            </Typography>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                showDisabledMonthNavigation
                                minDate={new Date()}
                            />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Typography p={1}>
                                End Date
                            </Typography>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                showDisabledMonthNavigation
                            />
                        </Stack>
                        <Stack direction={'row'}>
                            <Button onClick={() => setStartDate(null)}>Reset</Button>
                            <Button onClick={handleSave}>Save</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Popover>
        </div>
    );
});

export default DatePickerPopover;
