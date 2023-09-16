/* eslint-disable react/prop-types */

const Movie = ({isVisible, renderMovies}) => {
  // Using Tailwind CSS classes to control visibility
  const titleClass = isVisible ? "mt-28" : "mt-12";
  const title = isVisible ? "Search Results..." : "Featured Movie";
  
  return (
    <div>
      <h1 className={`mb-8 ml-16 text-2xl font-bold ${titleClass}`}>{`${title}`}</h1>
      <div className="grid h-full grid-cols-4 mx-12 mt-10 mb-24 gap-y-24">{renderMovies()}</div>
    </div>
  );
};

export default Movie;
