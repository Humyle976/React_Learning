function Result({ points, questions, dispatch }) {
  const percentage = Math.ceil((points * MaxPossiblePoints(questions)) / 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{" "}
        {MaxPossiblePoints(questions)} ({Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

function MaxPossiblePoints(questions) {
  let sum = 0;
  questions.forEach((question) => (sum += question.points));
  return sum;
}

export default Result;
