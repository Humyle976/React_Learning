import { FaRegCalendarDays } from "react-icons/fa6";

function Movie({
  movie,
  onSelect = null,
  clearSelected = null,
  selectedMovie = null,
  setHover = false,
}) {
  function handleClick() {
    if (selectedMovie.imdbID === movie.imdbID) {
      clearSelected({});
      return;
    }
    if (onSelect) onSelect(movie.imdbID);
  }
  return (
    <>
      <li
        className={`w-full border-b-2 border-white list-none flex gap-3 duration-300 ${
          setHover ? "hover:-translate-y-2" : ""
        } text-white`}
        onClick={() => {
          if (onSelect) handleClick();
        }}
      >
        <img src={movie.Poster} alt="Movie" className="w-20 h-24 " />
        <div className="flex flex-col justify-around">
          <h1>{movie.Title}</h1>
          <div className="flex items-center gap-2 text-xl">
            <FaRegCalendarDays className="text-orange-500" />
            <p>{movie.Year}</p>
          </div>
          <div className="flex justify-start gap-10 text-xl">
            <div className="flex gap-2 items-center">
              {movie.imdbRating && (
                <span className="fa fa-star text-orange-500"></span>
              )}
              <p>{movie.imdbRating}</p>
            </div>
            <div className="flex gap-2 items-center">
              {movie.Rating && (
                <span className="fa fa-trophy text-yellow-500"></span>
              )}
              <p>{movie.Rating}</p>
            </div>
            <div className="flex gap-2 items-center">
              {movie.Time && (
                <span className="fa fa-clock-o text-orange-500 text-green-500"></span>
              )}
              <p>{movie.Time}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default Movie;
