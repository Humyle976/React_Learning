function Navbar({ children }) {
  return (
    <>
      <div className="flex gap-3 justify-around mb-10 p-5 dark:bg-black bg-violet-800 items-center text-white text-lg">
        <h1>Movies Popcorn</h1>
        {children}
      </div>
    </>
  );
}

export default Navbar;
