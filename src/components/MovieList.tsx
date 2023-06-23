import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { getMovieList } from "../services/movieServices";
import { MovieContext } from "../context/MovieContext";
import "./MovieList.css";

function MovieList() {
  const { movies, setMovies, setCurrentMovieIndex } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentMovieIndex(0);
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const moviesWithDirectors = await getMovieList(page);
        setMovies(moviesWithDirectors);
        setLoading(false);
      } catch (error) {
        console.error("Algo salió mal al buscar las películas.", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, setMovies]);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <ClipLoader color="#00BFFF" size={150} />
      </div>
    );
  }


  return (
    <div>
      <div className="film-container">
        {movies.map((movie, index) => (
          <div key={movie.id} className="film-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>
              <strong>Fecha de lanzamiento:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>

            <Link
              to={`/movie/${movie.id}`}
              onClick={() => setCurrentMovieIndex(index)}
            >
              Detalles
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="current-page"
        >
          Anterior
        </button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
    </div>
  );
}

export default MovieList;
