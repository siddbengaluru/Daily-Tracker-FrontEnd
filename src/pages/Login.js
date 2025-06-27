import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = btoa(`${credentials.username}:${credentials.password}`);
    try {
      const response = await axios.get('http://localhost:8080/api/test', {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      setError(''); // Clear any existing error
      alert(response.data); // or navigate to dashboard
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Paper elevation={4} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Daily Tracker Login
          </Typography>

          {/* Show error alert if login fails */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={credentials.username}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={credentials.password}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>

          {/* ✅ Register link */}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Register here
            </Link>
          </Typography>

        </Paper>
      </Box>
    </Container>
    
  );
};

export default Login;
