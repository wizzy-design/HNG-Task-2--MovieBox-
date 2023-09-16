/* eslint-disable react/prop-types */
import Nav from "../components/Nav";
import Poster from "../components/Poster";
import Movie from "../components/Movie";
import Footer from "../components/Footer";

const LandingPage = ({
  searchKey,
  setSearchKey,
  searchMovies,
  renderMovies,
}) => {
  return (
    <>
      {/* Nav bar */}
      <Nav
        isVisible={searchKey ? true : false}
        setSearchKey={setSearchKey}
        searchMovies={searchMovies}
      />
      {/* Conditional Render of Poster */}
      {searchKey ? <Poster isVisible={searchKey ? true : false} /> : <Poster />}
      {/* Grid of movies */}
      <Movie isVisible={searchKey ? true : false} renderMovies={renderMovies} />
      {/* Footer */}
      <Footer />
      {/* <MovieDetail /> */}
    </>
  );
};

export default LandingPage;
