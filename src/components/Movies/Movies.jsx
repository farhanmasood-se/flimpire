import { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { display } from '@mui/system';
import { useGetMoviesQuery } from '../../services/TMDB.js';

import MovieList from '../MovieList/MovieList.jsx';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display='flex' justifyContent='center' mt='20px'>
        <Typography variant='h4'>
          No movies that match that name.
          <br />
          Plase search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'An error has occured';
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
