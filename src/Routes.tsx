import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const AppRoutes = () => (
<Router>
    <MovieProvider>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </MovieProvider>
</Router>
);

export default AppRoutes;
