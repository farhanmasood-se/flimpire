import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favouriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography varian="h4" gutterBottom>
          {' '}
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favouriteMovies.length ? (
        <Typography variant="h5">
          Add favourites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favourite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
