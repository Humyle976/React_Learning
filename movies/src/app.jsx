import { useState } from "react";
import Navbar from "./components/navbar";
import MoviesList from "./components/movies";
import { MdOutlineDarkMode } from "react-icons/md";
import Box from "./components/box";
import Main from "./components/main";
import WatchedSummary from "./components/watchedSummary";
import WatchedMovies from "./components/watchedMovies";
import SelectedMovie from "./components/selectedMovie";
import { useMovies } from "./components/useMovies";
import Search from "./components/search";
import Result from "./components/result";

function App() {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [query, setQuery] = useState("");
  const [movies] = useMovies(query, clearSelected);

  function clearSelected() {
    setSelectedMovie({});
  }
  async function onSelect(id) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=cd39bb56&i=${id}`);
    if (!res.ok) {
      throw new Error("Couldn't make request");
    }
    const result = await res.json();

    setSelectedMovie(result);
  }
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 bg-gray-300 dark:text-white  transition-colors duration-300 overflow-hidden">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <Result moviesLength={movies.length} />
      </Navbar>
      <Main>
        <Box>
          <MoviesList
            onSelect={onSelect}
            clearSelected={clearSelected}
            selectedMovie={selectedMovie}
            movies={movies}
          />
        </Box>
        {Object.keys(selectedMovie).length === 0 ? (
          <Box>
            <WatchedSummary watchedMovies={watchedMovies} />
            <WatchedMovies
              watchedMovies={watchedMovies}
              setWatchedMovies={setWatchedMovies}
            />
          </Box>
        ) : (
          <Box>
            <SelectedMovie
              selectedMovie={selectedMovie}
              key={selectedMovie.imdbID}
              setWatchedMovies={setWatchedMovies}
              watchedMovies={watchedMovies}
              clearSelected={clearSelected}
            />
          </Box>
        )}
      </Main>
      <MdOutlineDarkMode
        onClick={toggleDark}
        className="fixed bottom-10 right-10 text-2xl"
      />
    </div>
  );
}

export default App;
