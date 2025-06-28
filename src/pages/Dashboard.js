import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Dashboard = () => {
  const username = sessionStorage.getItem('username') || 'User';

  const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f4ff, #eaf6f6)',
        p: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome, {toTitleCase(username)} 👋
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Welcome to Daily Tracker
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Track your tasks and productivity efficiently.
      </Typography>

      {/* Cards */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
        {/* Tasks Today */}
        <Paper
          elevation={4}
          sx={{
            p: 3,
            minWidth: 200,
            borderRadius: 3,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
          }}
        >
          <AccessTimeIcon fontSize="large" color="primary" />
          <Typography variant="h6" mt={1}>
            Tasks Today
          </Typography>
          <Typography variant="h4" color="primary">
            3
          </Typography>
        </Paper>

        {/* Completed Tasks */}
        <Paper
          elevation={4}
          sx={{
            p: 3,
            minWidth: 200,
            borderRadius: 3,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
          }}
        >
          <CheckCircleIcon fontSize="large" sx={{ color: 'green' }} />
          <Typography variant="h6" mt={1}>
            Completed Tasks
          </Typography>
          <Typography variant="h4" sx={{ color: 'green' }}>
            5
          </Typography>
        </Paper>
      </Box>

      {/* Add New Entry Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleIcon />}
        sx={{
          mt: 2,
          px: 4,
          py: 1,
          fontSize: '1rem',
          borderRadius: 2,
          textTransform: 'none',
        }}
      >
        Add New Entry
      </Button>
    </Box>
  );
};

export default Dashboard;
