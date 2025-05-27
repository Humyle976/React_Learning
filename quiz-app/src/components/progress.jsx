function Progress({ index, maxQuestions }) {
  return (
    <div className="progress-div">
      <progress
        className="progress"
        value={index}
        max={maxQuestions}
      ></progress>
      <div>
        {index} / {maxQuestions}{" "}
      </div>
    </div>
  );
}

export default Progress;
