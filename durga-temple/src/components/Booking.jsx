// components/Booking.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Booking = () => {
  const { serviceType } = useParams();
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    // Simulate fetching available services for booking
    if (serviceType === 'darshanam') {
      setAvailableServices(['Morning Darshan', 'Afternoon Darshan', 'Evening Darshan']);
    } else if (serviceType === 'seva') {
      setAvailableServices(['Abhishekam', 'Archana', 'Sudarshan Homam']);
    } else {
      setAvailableServices([]);
    }
  }, [serviceType]);

  const handleBooking = (service) => {
    // Handle booking logic here
    alert(`You have booked ${service} for ${serviceType}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book a {serviceType === 'darshanam' ? 'Darshan' : 'Seva'} Service
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {availableServices.length === 0 ? (
          <Typography variant="body1">No services available for booking at the moment.</Typography>
        ) : (
          availableServices.map((service, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleBooking(service)}
            >
              {service}
            </Button>
          ))
        )}
      </Box>
    </Container>
  );
};

export default Booking;
