export const packagesMock = [
  {
    packageId: 1,
    hotel: {
      hotelId: 123,
      city: "New York",
      hotelName: "Luxury Hotel",
      checkIn: "2024-08-10",
      checkOut: "2024-08-15",
      rooms: 2,
      adults: 2,
      children: 1,
      price: 1200,
      rating: 7.7,
      photoUrl: [
        "https://via.placeholder.com/150",
        "https://example.com/photo2.jpg"
      ],
      bookingUrl: ""
    },
    flight: {
      isSingleWay: true,
      departFlightDetails: [
        {
          flightDetails: [
            {
              id: "DL123",
              flightNumber: "DL123",
              departureTime: "2024-08-10T08:00:00",
              arrivalTime: "2024-08-10T10:30:00",
              departureAirport: "JFK",
              departureCityName: "New York",
              arrivalAirport: "LAX",
              arrivalCityName: "Los Angeles",
              duration: "2h 30m",
              airline: "Delta Airlines"
            }
          ],
          marketing: [
            {
              logoUrl: "https://example.com/delta_logo.png",
              name: "Delta Airlines"
            }
          ],
          price: 500,
          duration: "2h 30m",
          token: "DL123TOKEN"
        }
      ],
      arrivalFlightDetails: null
    }
  },
  {
    packageId: 2,
    hotel: {
      hotelId: 456,
      city: "Paris",
      hotelName: "Cozy Inn",
      checkIn: "2024-09-05",
      checkOut: "2024-09-10",
      rooms: 1,
      adults: 1,
      children: 0,
      price: 800,
      rating: 8.5,
      photoUrl: [
        "https://via.placeholder.com/150",
        "https://example.com/photo4.jpg"
      ],
      bookingUrl: ""
    },
    flight: {
      isSingleWay: true,
      departFlightDetails: [
        {
          flightDetails: [
            {
              id: "AF456",
              flightNumber: "AF456",
              departureTime: "2024-09-05T12:00:00",
              arrivalTime: "2024-09-05T15:30:00",
              departureAirport: "CDG",
              departureCityName: "Paris",
              arrivalAirport: "LHR",
              arrivalCityName: "London",
              duration: "3h 30m",
              airline: "Air France"
            }
          ],
          marketing: [
            {
              logoUrl: "https://example.com/air_france_logo.png",
              name: "Air France"
            }
          ],
          price: 400,
          duration: "3h 30m",
          token: "AF456TOKEN"
        }
      ],
      arrivalFlightDetails: null
    }
  },
  // Add more packages as needed
];
