import Movie from "./movie";

function MoviesList({ onSelect, movies, selectedMovie, clearSelected }) {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
          selectedMovie={selectedMovie}
          clearSelected={clearSelected}
          setHover={true}
        />
      ))}
    </>
  );
}

export default MoviesList;
