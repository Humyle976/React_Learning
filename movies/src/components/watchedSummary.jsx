function WatchedSummary({ watchedMovies }) {
  const count = watchedMovies.length;
  const rating = average(watchedMovies, "imdbRating");
  const myrating = average(watchedMovies, "Rating");
  const time = total(watchedMovies);

  return (
    <div className="flex flex-col text-white dark:bg-zinc-950 bg-red-900 m-5 p-5 rounded-xl shadow-slate-500 dark:shadow-blue-500 shadow-lg">
      <h1 className="font-bold">MOVIES YOU WATCHED</h1>
      <div className="flex gap-5">
        <div className="flex items-center gap-2 justify-center">
          <span className="fa fa-check-square text-sm text-indigo-500"></span>
          <p>{count} movies</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="fa fa-star text-sm text-orange-500"></span>
          <p>{rating.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="fa fa-trophy text-sm text-yellow-500"></span>
          <p>{myrating.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="fa fa-clock-o text-sm text-green-500"></span>
          <p>{time} mins</p>
        </div>
      </div>
    </div>
  );
}

function average(arr, property) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, obj) => acc + (obj[property] || 0), 0);
  return sum / arr.length;
}

function total(obj) {
  if (!obj || obj.length === 0) {
    return 0;
  }
  const sum = obj.reduce((acc, obj) => acc + (obj["Time"] || 0), 0);
  return sum;
}

export default WatchedSummary;
