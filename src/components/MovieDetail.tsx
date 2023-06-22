import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Movie } from "../services/types";
import { getDetailedMovie } from "../services/movieServices";
import { MovieContext } from "../context/MovieContext";
import "./MovieDetail.css";

function MovieDetail() {
  const { id = "0" } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  const { movies, currentMovieIndex, setCurrentMovieIndex } =
    useContext(MovieContext);
  const navigate = useNavigate();

  const nextMovie = () => {
    if (currentMovieIndex < movies.length - 1) {
      setCurrentMovieIndex(currentMovieIndex + 1);
      navigate(`/movie/${movies[currentMovieIndex + 1].id}`);
    }
  };

  const previousMovie = () => {
    if (currentMovieIndex > 0) {
      setCurrentMovieIndex(currentMovieIndex - 1);
      navigate(`/movie/${movies[currentMovieIndex - 1].id}`);
    }
  };

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieDetail = await getDetailedMovie(parseInt(id));
      setMovie(movieDetail);
    };
    fetchMovieDetail();
  }, [id]);

  return (
    <div className="film-container">
      {movie && (
        <div className="film-card-interior">
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
          <p>{movie.overview}</p>
          <div className="detail-container">
            <button
              onClick={previousMovie}
              disabled={currentMovieIndex === 0}
              className="navigation-button"
            >
              Película anterior
            </button>
            <button
              onClick={nextMovie}
              disabled={currentMovieIndex === movies.length - 1}
              className="navigation-button"
            >
              Siguiente película
            </button>
          </div>

          <Link to="/" className="volver">
            Volver al listado
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
