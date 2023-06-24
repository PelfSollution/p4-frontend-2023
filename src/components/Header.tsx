import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import './Header.css'; 
import logo from '../assets/img/logo.svg'; 

const Header = () => {
  const location = useLocation();
  const { movies, currentMovieIndex } = useContext(MovieContext);
  let title = "Listado de películas";

  if(location.pathname.includes('/movie/') && movies[currentMovieIndex]) {
    title = movies[currentMovieIndex].title;
  }

  return (
    <header className="header">  
      <h1><img src={logo} alt="Logo tmdb" /> {title}</h1>
    </header>
  );
};

export default Header;