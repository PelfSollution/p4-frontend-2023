import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../config";

interface IMovieDetail {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
}

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovieDetail | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(
          "Algo salió mal al buscar los detalles de la película.",
          error
        );
      });
  }, [id]);

  return (
    <div className="film-container">
    {movie && (
      <div className="film-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Fecha de lanzamiento: {movie.release_date}</p>
        <p>Director:</p>
        <p>{movie.overview}</p>
        <Link to="/" className="volver">Volver al listado</Link>
      </div>
    )}
  </div>
  );
}

export default MovieDetail;
