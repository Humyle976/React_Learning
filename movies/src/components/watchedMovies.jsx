import Movie from "./movie";

function WatchedMovies({ watchedMovies, setWatchedMovies }) {
  function deleteMovie(id) {
    setWatchedMovies(watchedMovies.filter((movie) => movie.ID !== id));
  }
  return (
    <>
      {watchedMovies.map((movie) => (
        <div key={movie.ID} className="flex">
          <Movie movie={movie} />
          <button
            className="fa fa-trash self-start justify-items-start text-red-500 text-xl"
            onClick={() => deleteMovie(movie.ID)}
          ></button>
        </div>
      ))}
    </>
  );
}
export default WatchedMovies;
