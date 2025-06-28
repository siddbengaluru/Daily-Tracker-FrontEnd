import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 1 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/dashboard"
          sx={{ flexGrow: 1, color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Daily Tracker
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="primary" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="primary" component={Link} to="/tasks">Tasks</Button>
          <Button color="primary" component={Link} to="/add-entry">Add Entry</Button>
          <Button color="primary" component={Link} to="/profile">Profile</Button>
          <Button color="primary" onClick={handleLogout}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
