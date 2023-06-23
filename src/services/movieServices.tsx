import axios from "axios";
import { apiKey } from "../config";
import { Movie } from "./types";

function getDirector(credits: any): string {
  return (
    credits.crew.find((member: any) => member.job === "Director")?.name ||
    "Director no disponible"
  );
}

export async function getMovieList(page: number): Promise<Movie[]> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
  );

  const moviesWithDirectors = await Promise.all(
    response.data.results.map((movie: any) =>
      getFilmDetails(movie.id).then((director) => ({ ...movie, director }))
    )
  );
  return moviesWithDirectors;
}

async function getFilmDetails(movieId: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,watch/providers`
    );

    const director = getDirector(response.data.credits);

    return director;
  } catch (error) {
    console.error(
      `Algo salió mal al buscar los detalles de la película ${movieId}.`,
      error
    );
    return "Información no disponible";
  }
}

function getImageLogo(logoPath: string): string {
  return `https://image.tmdb.org/t/p/w200${logoPath}`;
}

export async function getDetailedMovie(movieId: number): Promise<Movie> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,watch/providers`
  );

  const director = getDirector(response.data.credits);

  const providersData = response.data["watch/providers"]?.results?.ES || {};

  const providers = providersData.flatrate || [];

  return {
    id: response.data.id,
    title: response.data.title,
    poster_path: response.data.poster_path,
    release_date: response.data.release_date,
    director,
    overview: response.data.overview || "Descripción no disponible",
    providers: providers.map((provider: any) => ({
      provider_name: provider.provider_name,
      logo_url: getImageLogo(provider.logo_path),
    })),
  };
}
