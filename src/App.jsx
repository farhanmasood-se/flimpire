/* eslint-disable */
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import useStyles from './styles';

import {
  Actors,
  MoviesInformation,
  Movies,
  Navbar,
  Profile,
} from './components';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<MoviesInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
