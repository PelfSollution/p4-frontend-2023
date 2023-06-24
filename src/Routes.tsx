import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Header from './components/Header';

const AppRoutes = () => (
  <Router>
    <MovieProvider>
    <Header />  
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </MovieProvider>
  </Router>
);

export default AppRoutes;
