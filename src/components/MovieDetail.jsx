/* eslint-disable react/prop-types */
import tv from "../assets/icons/tv.svg";
import home from "../assets/icons/Home.svg";
import projector from "../assets/icons/Projector.svg";
import show from "../assets/icons/show.svg";
import calendar from "../assets/icons/Calendar.svg";
import logout from "../assets/icons/Logout.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Play from "../assets/icons/play.svg";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams(); // Get the movieId from the route

  // API key
  const apiKey = "becbdef455e97340e5d0b1b5e5570c2d";

  useEffect(() => {
    // Fetch movie details using the id from the route
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Process the data here
        setMovieDetail(data);
      })
      .catch((error) => {
        // Handle fetch or processing errors here
        console.error('Fetch error:', error);
      });
  }, [id]); // Include id in the dependency array
  

  return (
    <div className="flex ">
      {/* SideBar */}
      <div className="hidden md:flex flex-col h-screen  py-4  border-solid border-2 border-[#0000004C] gap-y-6 rounded-tr-3xl rounded-br-xl">
        {/* MovieBox Logo */}
        <div className="flex items-center px-4 mb-2 text-lg font-bold text-black gap-x-4">
          <img src={tv} alt="Logo" className="inline w-8" /> MovieBox
        </div>

        {/* Navigations */}
        <div>
          <ul className="flex flex-col items-center justify-center w-1/9 gap-y-6">
            <li className="flex items-center pl-6 gap-x-6 justify-start text-[#666] text-sm poppins font-semibold  w-full ">
              <img className="w-6" src={home} alt="Home" /> <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-x-6 justify-start text-[#BE123C] bg-[#BE123C1A] poppins font-semibold text-sm w-full pl-7 py-3 border-r-4 border-r-[#BE123C]">
              <img className="w-5" src={projector} alt="Projector" />{" "}
              <a href="#">Movies</a>
            </li>
            <li className="flex items-center gap-x-6 justify-start text-[#666] poppins font-semibold text-sm w-full  pl-6">
              <img className="w-6" src={show} alt="TV Series" />{" "}
              <a href="#">TV Series</a>
            </li>
            <li className="flex items-center gap-x-6 justify-start text-[#666] poppins font-semibold text-sm w-full  pl-6">
              <img className="w-6" src={calendar} alt="Upcoming" />{" "}
              <a href="#">Upcoming</a>
            </li>
          </ul>
        </div>

        {/* Pink Bg sub-div */}
        <div className="w-44 px-3 py-6 space-y-2 border-2 border-solid rounded-2xl bg-rose-50 border-[#BE123CB2] mx-4 mt-4">
          <div className="w-1/8 text-sm font-bold poppins text-[#333333CC]">
            Play movie quizes and earn free tickets
          </div>
          <small className="text-xs font-medium poppins text-[#565454]">
            50k people are playing now
          </small>
          <button className="text-sm text-[#BE123C] font-medium px-4 py-2 bg-[#BE123C33] rounded-full block">
            Start playing
          </button>
        </div>

        {/* Logout Button */}
        <div className="flex font-semibold poppins text-[#666] text-sm px-4 pl-6 pt-1">
          <a href="#">
            <img className="inline w-6" src={logout} alt="Logout button" />{" "}
            Logout
          </a>
        </div>
      </div>

      {/* Movie Details */}
      <div className="w-full mx-6 mt-4 space-y-3">
        {/* Trailer */}
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
            alt="Trailer thumbnail"
            className="object-cover w-full rounded-md h-80"
          />
          <div className="absolute flex items-center text-xl font-bold text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <img className="z-40 w-20" src={Play} alt="Play" /> Watch Trailer
          </div>
          <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        {/* Title bar */}
        <div id="title-bar" className="flex items-center gap-x-4">
          <h3
            className="text-2xl font-bold"
            data-testid="movie-title"
          >{`${movieDetail.title}`}</h3>
          <p data-testid="movie-release-date">{`${movieDetail.release_date}`}</p>
          <p data-testid="movie-runtime">{`${movieDetail.runtime}`} Mins</p>
        </div>

        <div id="overview" data-testid="movie-overview">
          {`${movieDetail.overview}`}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
