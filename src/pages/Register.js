import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with API call
    console.log('Registered user:', form);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffe6e6', // Soft pink
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: '#d63384', fontWeight: 'bold' }}
          >
            Register
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: '#888', mb: 2 }}
          >
            Create your account to get started
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              required
              margin="normal"
              value={form.username}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#d63384',
                    boxShadow: '0 0 0 2px rgba(214, 51, 132, 0.2)',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={form.email}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#d63384',
                    boxShadow: '0 0 0 2px rgba(214, 51, 132, 0.2)',
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
              value={form.password}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#d63384',
                    boxShadow: '0 0 0 2px rgba(214, 51, 132, 0.2)',
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
                backgroundColor: '#d63384',
                '&:hover': {
                  backgroundColor: '#c2185b',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out',
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
            <Link to="/login" style={{ color: '#d63384', textDecoration: 'none' }}>
              Login here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
