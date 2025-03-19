import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to Sri Durga
Malleswara Swamy
Varla Devasthanam
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Experience the divine blessings of Sri Durga Malleswara Swamy through our temple services.
        </Typography>

        {/* Darshan Section */}
        <div>
          <Typography variant="h5" color="secondary" gutterBottom>
            Book Your Darshan
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/darshanam">
            Book Darshanam
          </Button>
        </div>

        {/* Seva Section */}
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5" color="secondary" gutterBottom>
            Participate in Seva
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/seva">
            Book Seva
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
