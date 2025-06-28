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

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', formData);
      setMessage({ type: 'success', text: res.data });
      setTimeout(() => navigate('/login'), 2000); // redirect to login after 2 sec
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data || 'Registration failed.' });
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #ffe0ec, #fce4ec)', // Soft pink background
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
          <Box textAlign="center" mb={2}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt="calendar"
              width="50"
              style={{ marginBottom: 8 }}
            />
            <Typography variant="h5" fontWeight="bold">
              Daily Tracker
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Create your account
            </Typography>
          </Box>

          {message.text && (
            <Alert severity={message.type} sx={{ mb: 2 }}>
              {message.text}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              required
              margin="normal"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#d81b60',
                '&:hover': {
                  backgroundColor: '#ad1457',
                  transform: 'scale(1.02)',
                  transition: '0.2s ease-in-out',
                },
              }}
            >
              Register
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: '#333' }}
          >
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#d81b60', textDecoration: 'none' }}>
              Login here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
