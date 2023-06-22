import './Header.css'; 
import logo from '../assets/img/logo.svg'; 

const Header = () => {
  return (
    <header className="header">  
      <h1><img src={logo} alt="Logo tmdb" />Listado de películas</h1>
    </header>
  );
};

export default Header;
