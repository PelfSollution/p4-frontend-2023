import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiKey } from "../config";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  director?: string;
  providers?: { provider_name: string; logo_url: string; }[]; 
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Algo salió mal al buscar las películas.", error);
      });
  }, []);

  return (
    <div className="film-container">
      {movies.map((movie) => (
        <div key={movie.id} className="film-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Fecha de lanzamiento: {movie.release_date}</p>
          <p>Director: {movie.director}</p>

          <Link to={`/movie/${movie.id}`}>Detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
