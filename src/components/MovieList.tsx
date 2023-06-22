import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../services/types";
import { getMovieList } from "../services/movieServices";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesWithDirectors = await getMovieList(page);
        setMovies(moviesWithDirectors);
      } catch (error) {
        console.error("Algo salió mal al buscar las películas.", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div>
      <div className="film-container">
        {movies.map((movie) => (
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

            <Link to={`/movie/${movie.id}`}>Detalles</Link>
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
