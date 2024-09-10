// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', width: '100%' }}>
          {/* Title on the left */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Web Speed Analyzer
            </Typography>
          </Box>
          
          {/* Navigation menu on the right */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About Us
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact Us
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
