/* eslint-disable react/prop-types */
// Icons
import imdb from "../assets/icons/imdb.svg";
import tomato from "../assets/icons/tomato.svg";
import play from "../assets/icons/play.svg";

const Poster = ({isVisible}) => {
  // Using Tailwind CSS classes to control visibility
  const posterClasses = isVisible ? "hidden" : "block";
  
  return (
    <div className={`relative bg-[url('../src/assets/images/john_wickBg.svg')] h-screen bg-center bg-no-repeat bg-cover ${posterClasses}`}>
      {/* Movie Description */}
      <div className="absolute w-full space-y-4 md:w-1/3 top-40 left-16">
        {/* Movie Title */}
        <h2 id="title" className="text-3xl font-bold leading-tight text-white md:text-5xl">
          John Wick 3 : Parabellum
        </h2>

        {/* Movie Ratings */}
        <div className="flex space-x-4">
          <div
            id="imdb"
            className="flex items-center pr-6 space-x-3 text-white"
          >
            <img src={imdb} alt="IMDB" />{" "}
            <span className="text-xs">86.0 / 100</span>
          </div>
          <div id="tomato" className="flex items-center space-x-3 text-white">
            <img src={tomato} alt="Tomato" />{" "}
            <span className="text-sm">97%</span>
          </div>
        </div>

        {/* Movie Synopsis */}
        <p className="w-1/2 text-sm text-white md:w-5/6">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
          
          <button className="flex items-center px-4 py-2 mt-5 uppercase bg-pink-800 rounded-md">
            <img src={play} alt="Play" className="pr-2 "/> Watch trailer
          </button>
        </p>
      </div>
    </div>
  );
};

export default Poster;
