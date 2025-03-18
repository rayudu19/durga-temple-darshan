import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Darshanam = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Darshanam Services
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Experience the divine blessings of Sri Durga Malleswara Swamy through our Darshanam services.
        </Typography>
        
        <Typography variant="h6" color="textPrimary" paragraph>
          Choose from the following Darshanam services:
        </Typography>
        
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/booking/darshanam"
          sx={{ marginBottom: '10px' }}
        >
          Morning Darshan
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/booking/darshanam"
          sx={{ marginBottom: '10px' }}
        >
          Afternoon Darshan
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/booking/darshanam"
          sx={{ marginBottom: '10px' }}
        >
          Evening Darshan
        </Button>
      </Box>
    </Container>
  );
};

export default Darshanam;
