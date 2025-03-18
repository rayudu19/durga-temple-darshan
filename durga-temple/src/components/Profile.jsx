import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user?.email}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          <strong>Transaction History:</strong>
          <ul>
            <li>Donation to Annadanam Trust</li>
            <li>Booking for Darshanam</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;
