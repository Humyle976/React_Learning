function Start({ questionLength, dispatch }) {
  return (
    <div className="start">
      <h2>Are you ready to take the Quiz?</h2>
      <h3>{questionLength} questions to test</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Ready" })}
      >
        Start
      </button>
    </div>
  );
}
export default Start;
