import React, {useEffect, useRef, useState} from 'react';
import {Typography, Grid, Box} from '@mui/material';
import {HomeSearchGrid, WindowDiv, ActionButton} from '../../styles/ComponentsStyles';
import DatePickerPopover from './DatePickerPopover';
import OccupancyPopover from './OccupancyPopover';
import ServicesBudgetPopover from './ServicesBudgetPopover';
import {CityOption} from '../../models/CityOption';
import CitySelect from '../GenericFolder/CitySelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/types';
import {SearchPackageData} from '../../models/SearchPackageData';
import {setPackageData} from '../../redux/actions';
import {useNavigate} from 'react-router';
import {LocationApi} from '../../apis/LocationApi';
import {PackageSearchOrderRequest} from "../../models/PackageSearchOrderRequest";
import {PackageSearchApi} from "../../apis/PackageSearchApi";

const PackageSearch: React.FC = () => {

    const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);
    const [selectedCheckOut, setSelectedCheckOut] = useState<string | null>(null);
    const [selectedAdults, setSelectedAdults] = useState<number | null>(null);
    const [selectedChildren, setSelectedChildren] = useState<number | null>(null);
    const [selectedRooms, setSelectedRooms] = useState<number | null>(null);
    const [selectedHotelMaxPrice, setSelectedHotelMaxPrice] = useState<number | null>(null);
    const [selectedHotelMinPrice, setSelectedHotelMinPrice] = useState<number | null>(null);
    const [selectedCarMaxPrice, setSelectedCarMaxPrice] = useState<number | null>(null);
    const [selectedCarMinPrice, setSelectedCarMinPrice] = useState<number | null>(null);
    const [selectedFlightMaxPrice, setSelectedFlightMaxPrice] = useState<number | null>(null);
    const [selectedFlightMinPrice, setSelectedFlightMinPrice] = useState<number | null>(null);
    const [selectedFromCity, setSelectedFromCity] = useState<CityOption | null>(null);
    const [selectedToCity, setSelectedToCity] = useState<CityOption | null>(null);


    const eventData = useSelector((state: AppState) => state.eventData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

      // Use ref for the DatePickerPopover
      const datePickerRef = useRef<{ resetSelectedText: () => void } | null>(null);
      const occupancyPopoverRef = useRef<{ resetSelectedOccupancy: () => void }>(null);
      const servicesBudgetPopoverRef = useRef<{ resetSelectedBudget: () => void } | null>(null);
      const fromCitySelectRef = useRef<{ resetSelectedCity: () => void } | null>(null);
      const toCitySelectRef = useRef<{ resetSelectedCity: () => void } | null>(null);


    const packageSearchApi = new PackageSearchApi();


    const [packageData, setPackage] = useState<SearchPackageData>({
        checkIn: eventData?.checkIn ?? null,
        checkOut: eventData?.checkIn ? eventData.checkIn + 3 : null,
        rooms: 1,
        adults: 2,
        children: 0,
        maxHotelPrice: 10000,
        minHotelPrice: 100,
        maxFlightPrice: 10000,
        minFlightPrice: 100,
        maxCarPrice: 10000,
        minCarPrice: 100,
        fromCity: eventData?.fromCity ?? null,
        fromCountry: eventData?.fromCountry ?? null,
        toCity: eventData?.toCity ?? null,
        toCountry: eventData?.toCountry ?? null,
        fromCityId: eventData?.fromCityId ?? null,
        toCityId: eventData?.toCityId ?? null,
    });

    // Function to check if all fields in searchData are filled
    const isSearchDataFilled = () => {
        return selectedCheckIn && selectedCheckOut && selectedAdults !== null && selectedAdults >= 0 && selectedChildren !== null && selectedChildren >= 0
            && selectedRooms !== null && selectedRooms >= 0 && selectedHotelMaxPrice && selectedHotelMinPrice && selectedCarMaxPrice && selectedCarMinPrice && selectedFlightMaxPrice && selectedFlightMinPrice && selectedFromCity && selectedToCity;
    };


    const handleSelectDateRange = (checkIn: string, checkOut: string) => {
        setSelectedCheckIn(checkIn);
        setSelectedCheckOut(checkOut);
        setPackage({...packageData, checkIn, checkOut});
    };

    const handleSelectOccupancy = (adults: number, children: number, rooms: number) => {
        setSelectedAdults(adults);
        setSelectedChildren(children);
        setSelectedRooms(rooms);
        setPackage({...packageData, adults, children, rooms});
    };

    const handleSelectServicesBudget = (minHotelPrice: number, maxHotelPrice: number,minFlightPrice: number, maxFlightPrice: number,minCarPrice: number, maxCarPrice: number) => {
        setSelectedHotelMinPrice(minHotelPrice);
        setSelectedHotelMaxPrice(maxHotelPrice);
        setSelectedCarMinPrice(minCarPrice);
        setSelectedCarMaxPrice(maxCarPrice);
        setSelectedFlightMinPrice(minFlightPrice);
        setSelectedFlightMaxPrice(maxFlightPrice);
        setPackage({...packageData, minHotelPrice, maxHotelPrice,minFlightPrice,maxFlightPrice, minCarPrice,maxCarPrice});
    };

    const handleSelectFromCity = async (city: CityOption) => {
        setSelectedFromCity(city);
        setPackage({...packageData, fromCity: city.value, fromCountry: city.country, fromCityId: city.id});
    };

    const handleSelectToCity = async (city: CityOption) => {
        setSelectedToCity(city);
        setPackage({...packageData, toCity: city.value, toCountry: city.country, toCityId: city.id});
    };

    const handlePackageSearch = () => {


        localStorage.removeItem('packageData');
        dispatch(setPackageData(packageData));
        console.log("Package Data:" + JSON.stringify(packageData));

        const packageSearchOrder: PackageSearchOrderRequest = {
            userId: localStorage.getItem("userId") ? parseInt(localStorage.getItem("userId") as string, 10) : -1,
            orderDate: new Date(),
            checkInDate: packageData.checkIn || '',
            checkOutDate: packageData.checkOut || '',
            roomCount: packageData.rooms || 0,
            adults: packageData.adults || 0,
            children: packageData.children || 0,
            minHotelPrice: packageData.minHotelPrice || 0,
            maxHotelPrice: packageData.maxHotelPrice || 0,
            minCarPrice: packageData.minCarPrice || 0,
            maxCarPrice: packageData.maxCarPrice || 0,
            minFlightPrice: packageData.minFlightPrice || 0,
            maxFlightPrice: packageData.maxFlightPrice || 0,
            fromCity: packageData.fromCity || '',
            toCity: packageData.toCity || '',
            fromCountry: packageData.fromCountry || '',
            toCountry: packageData.toCountry || '',
        };

        // Save the search data
        packageSearchApi.savePackageSearch(packageSearchOrder);

        // Navigate to results page
        navigate(`/package-search-results`);

         // Call resetSelectedText
         if (datePickerRef.current) {
            datePickerRef.current.resetSelectedText();
        }
        if (occupancyPopoverRef.current) {
            occupancyPopoverRef.current.resetSelectedOccupancy();
        }
        if (servicesBudgetPopoverRef.current) {
            servicesBudgetPopoverRef.current.resetSelectedBudget();
        }
        if (fromCitySelectRef.current) {
            fromCitySelectRef.current.resetSelectedCity();
        }
        if (toCitySelectRef.current) {
            toCitySelectRef.current.resetSelectedCity();
        }
    };



    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} sx={{marginLeft: '40px'}}>
                <Grid item xs={2}>
                    <DatePickerPopover onSelect={handleSelectDateRange} ref={datePickerRef}/>
                </Grid>
                <Grid item xs={2}>
                    <OccupancyPopover onSelect={handleSelectOccupancy} ref={occupancyPopoverRef}/>
                </Grid>
                <Grid item xs={2}>
                    <ServicesBudgetPopover onSelect={handleSelectServicesBudget} ref={servicesBudgetPopoverRef}/>
                </Grid>
                <Grid item xs={2}>
                    <CitySelect onSelect={handleSelectFromCity} placeholder="Select City" title='From' ref={fromCitySelectRef}/>
                </Grid>
                <Grid item xs={2}>
                    <CitySelect onSelect={handleSelectToCity} placeholder="Select City" title='To' ref={toCitySelectRef}/>
                </Grid>
                <Grid item xs={2}>
                    {(<ActionButton variant='contained' onClick={handlePackageSearch}
                                    disabled={!isSearchDataFilled()}>Search</ActionButton>)}
                </Grid>
            </HomeSearchGrid>
        </WindowDiv>
    );
};

export default PackageSearch;
