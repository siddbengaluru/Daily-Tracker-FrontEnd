import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login
    navigate('/');
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
