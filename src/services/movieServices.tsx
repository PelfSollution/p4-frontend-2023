import axios from "axios";
import { apiKey } from "../config";
import { Movie } from "./types";

export async function getMovieList(page: number): Promise<Movie[]> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
  );

  const moviesWithDirectors = await Promise.all(
    response.data.results.map(async (movie: any) => {
      const director = await getFilmDetails(movie.id);
      return { ...movie, director };
    })
  );

  return moviesWithDirectors;
}

async function getFilmDetails(movieId: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,watch/providers`
    );

    const director =
      response.data.credits.crew.find(
        (member: any) => member.job === "Director"
      )?.name || "Director no disponible";

    return director;
  } catch (error) {
    console.error(
      `Algo salió mal al buscar los detalles de la película ${movieId}.`,
      error
    );
    return "Información no disponible"; 
  }
}

export async function getDetailedMovie(movieId: number): Promise<Movie> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,watch/providers`
  );

  const director =
    response.data.credits.crew.find((member: any) => member.job === "Director")
      ?.name || "Director no disponible";

  return {
    id: response.data.id,
    title: response.data.title,
    poster_path: response.data.poster_path,
    release_date: response.data.release_date,
    director,
    overview: response.data.overview || "Descripción no disponible", 
  };
}
