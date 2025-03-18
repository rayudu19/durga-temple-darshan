import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to Sri Kanaka Durga Temple
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Experience the divine blessings of Sri Durga Malleswara Swamy through our temple services.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/darshanam">
          Book Darshanam
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
