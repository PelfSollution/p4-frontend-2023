import React from "react";
import { Movie } from "../services/types";

interface MovieContextProps {
  movies: Movie[];
  currentMovieIndex: number;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setCurrentMovieIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const MovieContext = React.createContext<MovieContextProps>({
  movies: [],
  currentMovieIndex: 0,
  setMovies: () => {},
  setCurrentMovieIndex: () => {},
});

interface MovieProviderProps {
  children: React.ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = React.useState<number>(0);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, currentMovieIndex, setCurrentMovieIndex }}
    >
      {children}
    </MovieContext.Provider>
  );
};
