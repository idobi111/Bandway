export const ResultsPackageMocks = [
    {
        packageId: 1,
        hotel: {
            hotelId: 5678,
            city: "Dublin",
            hotelName: "The Devlin Dublin",
            checkIn: "2024-05-25",
            checkOut: "2024-05-28",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 779,
            rating: 8.8,
            photoUrl: [
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/172841856.jpg?k=7f0f31fa161ad8dac7d3c49dc58c2dfaa80768facd720ab54af9532b1ca84b75&o=&hp=1",
                "https://example.com/photo4.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "Ireland",
                    destCity: "Dublin",
                    flightDetails: [
                        {
                            id: "IB123",
                            flightNumber: "IB123",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "BCN",
                            arrivalCityName: "Barcelona",
                            duration: "2h 30m",
                            airline: "Iberia"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "Iberia"
                        }
                    ],
                    price: 200,
                    duration: "2h 30m",
                    token: "IB123TOKEN",
                    stopCount: 1

                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 1,
            price: 100
        }
    },
    {
        packageId: 2,
        hotel: {
            hotelId: 91011,
            city: "Madrid",
            hotelName: "Royal Palace Hotel",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 700,
            rating: 7.6,
            photoUrl: [
                "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://example.com/photo6.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "LH456",
                            flightNumber: "LH456",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "CDG",
                            arrivalCityName: "Paris",
                            duration: "2h 30m",
                            airline: "Lufthansa"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "Lufthansa"
                        }
                    ],
                    price: 300,
                    duration: "2h 30m",
                    token: "LH456TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 2,
            price: 100
        }
    },
    {
        packageId: 3,
        hotel: {
            hotelId: 121314,
            city: "Madrid",
            hotelName: "Sakura Inn",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 450,
            rating: 9.4,
            photoUrl: [
                "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://example.com/photo8.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "AF789",
                            flightNumber: "AF789",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "LHR",
                            arrivalCityName: "London",
                            duration: "2h 30m",
                            airline: "Air France"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "Air France"
                        }
                    ],
                    price: 400,
                    duration: "2h 30m",
                    token: "AF789TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 3,
            price: 100
        }
    },
    {
        packageId: 4,
        hotel: {
            hotelId: 151617,
            city: "Madrid",
            hotelName: "Eiffel Tower Hotel",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 600,
            rating: 4.5,
            photoUrl: [
                "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://example.com/photo10.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "BA101",
                            flightNumber: "BA101",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "CDG",
                            arrivalCityName: "Paris",
                            duration: "2h 30m",
                            airline: "British Airways"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "British Airways"
                        }
                    ],
                    price: 500,
                    duration: "2h 30m",
                    token: "BA101TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 4,
            price: 100
        }
    },
    {
        packageId: 5,
        hotel: {
            hotelId: 181920,
            city: "Madrid",
            hotelName: "Colosseum View Hotel",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 400,
            rating: 1.2,
            photoUrl: [
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://example.com/photo12.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "DL111",
                            flightNumber: "DL111",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "FCO",
                            arrivalCityName: "Rome",
                            duration: "2h 30m",
                            airline: "Delta Airlines"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "Delta Airlines"
                        }
                    ],
                    price: 300,
                    duration: "2h 30m",
                    token: "DL111TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 5,
            price: 100
        }
    },
    {
        packageId: 6,
        hotel: {
            hotelId: 212223,
            city: "Madrid",
            hotelName: "Harbour Bridge Hotel",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 800,
            rating: 1.1,
            photoUrl: [
                "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://example.com/photo14.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "UA222",
                            flightNumber: "UA222",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "JFK",
                            arrivalCityName: "New York",
                            duration: "8h 30m",
                            airline: "United Airlines"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "United Airlines"
                        }
                    ],
                    price: 900,
                    duration: "8h 30m",
                    token: "UA222TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 6,
            price: 100
        }
    },
    {
        packageId: 7,
        hotel: {
            hotelId: 212220,
            city: "Madrid",
            hotelName: "Bridge Hotel",
            checkIn: "2024-07-10",
            checkOut: "2024-07-15",
            rooms: 1,
            adults: 2,
            children: 0,
            price: 800,
            rating: 5.3,
            photoUrl: [
                "http://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg",
                "https://example.com/photo14.jpg"
            ],
            bookingUrl: ""
        },
        flight: {
            isSingleWay: true,
            departFlightDetails: [
                {
                    sourceCountry: "Israel",
                    sourceCity: "Tel Aviv",
                    destCountry: "United Kingdom",
                    destCity: "London",
                    flightDetails: [
                        {
                            id: "16995-10141-2404251550-2404251940--32478",
                            flightNumber: "SN3290",
                            departureTime: "2024-04-25T15:50:00",
                            arrivalTime: "2024-04-25T19:40:00",
                            departureAirport: "TLV",
                            departureCityName: "Tel Aviv",
                            arrivalAirport: "MAD",
                            arrivalCityName: "Madrid",
                            duration: "4h 50m",
                            airline: "Brussels Airlines"
                        },
                        {
                            id: "AA333",
                            flightNumber: "AA333",
                            departureTime: "2024-07-10T08:00:00",
                            arrivalTime: "2024-07-10T10:30:00",
                            departureAirport: "MAD",
                            departureCityName: "Madrid",
                            arrivalAirport: "LAX",
                            arrivalCityName: "Los Angeles",
                            duration: "12h 30m",
                            airline: "American Airlines"
                        }
                    ],
                    marketing: [
                        {
                            logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/I*.png",
                            name: "American Airlines"
                        },
                        {
                            "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/9_.png",
                            "name": "Blue Bird Airways"
                        }
                    ],
                    price: 1000,
                    duration: "12h 30m",
                    token: "AA333TOKEN",
                    stopCount: 1
                }
            ],
            arrivalFlightDetails: null
        },
        carRental: {
            id: 7,
            price: 100
        }
    }
    // Add more packages as needed
];
