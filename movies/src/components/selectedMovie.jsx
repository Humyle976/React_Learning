import Star from "./rating";
import { useEffect, useState, useRef } from "react";

function SelectedMovie({
  selectedMovie,
  watchedMovies,
  setWatchedMovies,
  clearSelected,
}) {
  const [rating, setRating] = useState(0);
  const ratingSelectedCount = useRef(0);

  useEffect(
    function () {
      if (rating > 0) ratingSelectedCount.current++;
    },
    [rating]
  );
  const alreadyExists = watchedMovies
    .map((movie) => movie.ID)
    .includes(selectedMovie.imdbID);

  const rated = watchedMovies.find(
    (movie) => movie.ID === selectedMovie.imdbID
  )?.Rating;

  function handleClick() {
    const movie = {
      ID: selectedMovie.imdbID,
      Poster: selectedMovie.Poster,
      Title: selectedMovie.Title,
      Rating: rating,
      imdbRating: Number(selectedMovie.imdbRating),
      Time: Number(selectedMovie.Runtime.split(" ")[0]),
      Year: Number(selectedMovie.Year),
      ratingHover: ratingSelectedCount.current,
    };

    setWatchedMovies([...watchedMovies, movie]);
    clearSelected();
  }
  return (
    <>
      <button
        className="absolute top-5 w-10 h-10 rounded-full bg-red-500 text-white drop-shadow-sm transition-colors duration-150 "
        onClick={() => clearSelected()}
      >
        <span className="fa fa-arrow-left"></span>
      </button>
      <div className="flex flex-col mt-10">
        <img
          src={selectedMovie.Poster}
          alt="Movie"
          className="self-center size-80"
        />
        <div>
          <h1 className="text-white font-bold text-center mt-2">
            {selectedMovie.Title}
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <span className="fa fa-star text-orange-500"></span>
            <p className="text-white">{selectedMovie.imdbRating}</p>
          </div>
          <div className="flex flex-col mt-3 dark:bg-black bg-violet-900 p-3 rounded-xl">
            {!alreadyExists && (
              <>
                <Star rating={rating} setRating={setRating} />
                {rating > 0 && (
                  <button
                    onClick={handleClick}
                    className="dark:bg-red-500 bg-red-500 text-white w-1/3 self-center mt-2 p-2 rounded-xl text-md font-medium"
                  >
                    Add To List
                  </button>
                )}
              </>
            )}
            {alreadyExists && (
              <div className="flex items-center gap-1 justify-center font-medium">
                <div className="text-white text-center">
                  You gave this movie
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white">{rated}</span>
                  <span className="fa fa-star text-orange-500 text-lg"></span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center mt-5">
            <p className="text-justify text-white">{selectedMovie.Plot}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedMovie;
