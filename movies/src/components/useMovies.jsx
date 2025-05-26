import { useState, useEffect } from "react";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      callback?.();
      async function Query() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=cd39bb56&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Invalid Response");
          }
          const result = await res.json();

          if (result.Response === "False") throw new Error("Movie not Found");
          setMovies(result.Search);
        } catch (err) {
          console.log(err);
        }
      }
      Query();

      return function () {
        controller.abort();
        setMovies([]);
      };
    },
    [query]
  );

  return [movies];
}
