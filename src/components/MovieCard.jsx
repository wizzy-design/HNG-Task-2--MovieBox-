/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { useState } from "react";
import imdb from "../assets/icons/imdb.svg";
import tomato from "../assets/icons/tomato.svg";
// import heart from "../assets/icons/Heart.svg"

const MovieCard = ({ movie }) => {
  const fullDate = movie.release_date;
  const year = fullDate.substring(0, 4);

  const [fav, setFav] = useState(false);

  return (
    // Movie Card component
    <div
      className="flex flex-col items-center space-y-2"
      data-testid="movie-card"
    >
      {/* Movie Poster */}
      <div className="relative flex justify-center">
        <img
          data-testid="movie-poster"
          className="w-56"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
        />
        {/* <img
          className="absolute cursor-pointer top-2 w-1/10 right-4"
          src={heart}
          alt="Heart button"
        /> */}
        <svg
          className="absolute cursor-pointer top-2 w-1/10 right-4"
          onClick={() => setFav(true)}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_26835_11)">
            <ellipse
              cx="15"
              cy="15.1842"
              rx="15"
              ry="14.6053"
              fill="#F3F4F6"
              fill-opacity="0.5"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.17157 10.4829C9.73367 8.96192 12.2663 8.96192 13.8284 10.4829L15 11.6236L16.1716 10.4829C17.7337 8.96192 20.2663 8.96192 21.8284 10.4829C23.3905 12.0039 23.3905 14.4699 21.8284 15.9909L15 22.6396L8.17157 15.9909C6.60948 14.4699 6.60948 12.0039 8.17157 10.4829Z"
            fill={`${fav ? "#e73939c4" : "#D1D5DB"}`} 

          />
          <defs>
            <filter
              id="filter0_b_26835_11"
              x="-2"
              y="-1.42102"
              width="34"
              height="33.2106"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_26835_11"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_26835_11"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Movie Descriptions */}
      <div id="desc" className="flex flex-col content-start w-56">
        <small
          className="text-[#9CA3AF] text-xs font-bold"
          data-testid="movie-release-date"
        >
          USA, {year}
        </small>
        <p className="font-bold" data-testid="movie-title">
          {movie.title}
        </p>
      </div>

      {/* Movie Ratings */}
      <div className="flex justify-center w-full gap-x-10">
        <div className="flex items-center pr-6 space-x-3 text-black">
          <img src={imdb} alt="IMDB" />{" "}
          <span className="text-xs">86.0 / 100</span>
        </div>
        <div className="flex items-center space-x-3 text-black">
          <img src={tomato} alt="Tomato" /> <span className="text-sm">97%</span>
        </div>
      </div>
    </div>
  );
};

// Props type validation

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    // Add more prop validations as needed
  }).isRequired,
};

export default MovieCard;
