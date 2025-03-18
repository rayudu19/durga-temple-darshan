// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Profile from './components/Profile';
import Booking from './components/Booking';
import Darshanam from './components/Darshanam';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722',  //Red
    },
    secondary: {
      main: '#FFD700',  // Gold
    },
    background: {
      default: '#F5F5F5',  // Light background 
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking/:serviceType" element={<Booking />} />
            <Route path="/darshanam" element={<Darshanam />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
