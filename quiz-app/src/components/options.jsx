function Options({ options, questions, index, hasAnswered, dispatch, time }) {
  const answer = hasAnswered !== null;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      {options.map((option, i) => (
        <button
          className={`btn btn-option ${
            answer
              ? i === questions[index].correctOption
                ? "correct answer"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "Answered", payload: i })}
          disabled={answer}
        >
          {option}
        </button>
      ))}
      <div className="button">
        <div className="btn ">
          {minutes < 10 ? "0" : null}
          {minutes}:{seconds < 10 ? "0" : null}
          {seconds}
        </div>
        {answer && index !== questions.length - 1 && (
          <div className="btn" onClick={() => dispatch({ type: "Next" })}>
            Next
          </div>
        )}
      </div>
    </>
  );
}
export default Options;
