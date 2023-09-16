import LandingPage from "./pages/LandingPage";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../src/components/MovieCard";

const App = () => {
  // State for storing Movie List
  const [movieList, setMovieList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  // const [movieDetail, setMovieDetail] = useState({});

  // API key
  const apiKey = "becbdef455e97340e5d0b1b5e5570c2d";

  // Function that fetches data from API
  const getMovie = (searchKey) => {
    const type = searchKey ? "search/movie" : "movie/top_rated";
    fetch(
      `https://api.themoviedb.org/3/${type}?api_key=${apiKey}&query=${searchKey}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  //  // Function that fetches data from API
  //  const getMovieDetail = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US&api_key=${apiKey}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMovieDetail(data));
  // };

  useEffect(() => {
    getMovie();
    // getMovieDetail();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    getMovie(searchKey);
  };

  //   Function to render MovieCard component
  const renderMovies = () => {
    return movieList
      .slice(0, 10)
      .map((movie) => (
        <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
      ));
  };

  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              searchMovies={searchMovies}
              renderMovies={renderMovies}
            />
          }
        />
        {/* <Route 
          path="/:id"
          element={movieDetail.map((movie) => (
            <MovieDetail key={movie.id} movieId={movie.id} movieDetail={movieDetail} />
          ))}
        /> */}
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
