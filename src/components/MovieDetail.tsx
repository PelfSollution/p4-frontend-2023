import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Movie } from "../services/types";
import { getDetailedMovie } from "../services/movieServices";

function MovieDetail() {
  const { id = "0" } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

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
          <Link to="/" className="volver">
            Volver al listado
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
