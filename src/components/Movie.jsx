import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movie = () => {
  // State for storing Movie List
  const [movieList, setMovieList] = useState([]);

  // Function that fetches data from API
  const getMovie = () => {
    fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=becbdef455e97340e5d0b1b5e5570c2d"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  //   Function to render MovieCard component
  const renderMovies = () => {
    return movieList
      .slice(0, 10)
      .map((movie) => <MovieCard key={movie.id} movie={movie} />);
  };

  return (
    <div>
      <h1 className="mt-12 mb-8 ml-16 text-2xl font-bold">Featured Movie</h1>
      <div className="grid h-full grid-cols-4 mx-12 mt-10 mb-24 gap-y-24">{renderMovies()}</div>
    </div>
  );
};

export default Movie;
