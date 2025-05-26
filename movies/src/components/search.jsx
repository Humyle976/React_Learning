import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const searchBar = useRef(null);

  useEffect(function () {
    searchBar.current.focus();
  }, []);
  return (
    <div className="flex gap-2 items-center">
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-indigo-100 p-1 rounded-md text-black"
        ref={searchBar}
      />
    </div>
  );
}

export default Search;
