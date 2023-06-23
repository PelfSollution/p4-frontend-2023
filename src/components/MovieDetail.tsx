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

  function getSearchUrl(providerName: string, filmTitle: string): string {
    const encodedTitle = encodeURIComponent(filmTitle);
    if (providerName.toLowerCase().includes("netflix")) {
      return `https://www.netflix.com/search?q=${encodedTitle}`;
    } else if (providerName.toLowerCase().includes("hbo")) {
      return `https://www.hbomax.com/search?q=${encodedTitle}`;
    } else if (
      providerName.toLowerCase().includes("amazon") ||
      providerName.toLowerCase().includes("prime")
    ) {
      return `https://www.amazon.es/s?k=${encodedTitle}&i=instant-video`;
    } else if (
      providerName.toLowerCase().includes("apple") ||
      providerName.toLowerCase().includes("appletv")
    ) {
      return `https://tv.apple.com/search?q=${encodedTitle}`;
    } else if (providerName.toLowerCase().includes("movistar")) {
      return `https://ver.movistarplus.es/busqueda/?q=${encodedTitle}`;
    } else {
      return `https://www.google.com/search?q=${encodeURIComponent(
        providerName
      )}+${encodedTitle}`;
    }
  }

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
          {movie.providers ? (
            movie.providers.length > 0 ? (
              <div className="watch-providers">
                <h3>Proveedores de transmisión en línea (España)</h3>
                <ul>
                  {movie.providers.map((provider) => (
                    <li key={provider.provider_name}>
                      <a
                        href={getSearchUrl(provider.provider_name, movie.title)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="logo" 
                          src={provider.logo_url}
                          alt={provider.provider_name}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="alert">
                No se encontraron proveedores de transmisión en línea para esta
                película.
              </p>
            )
          ) : (
            <p className="alert">
              La información de los proveedores de transmisión en línea no está
              disponible.
            </p>
          )}

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
