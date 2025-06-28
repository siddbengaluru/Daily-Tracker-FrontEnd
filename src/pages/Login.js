import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', credentials);
      setError('');
      sessionStorage.setItem('username', credentials.username);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #e3eaf2, #f2f4f7)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Box textAlign="center" mb={3}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt="calendar icon"
              width="60"
              style={{ marginBottom: 8 }}
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Daily Tracker
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Login to continue
            </Typography>
          </Box>

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
              required
              margin="normal"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="username"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
                  },
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="current-password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                  transform: 'scale(1.02)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: '#555' }}
          >
            Don’t have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#1976d2', fontWeight: 500, textDecoration: 'none' }}
            >
              Register here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
