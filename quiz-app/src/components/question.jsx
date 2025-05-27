import { useEffect } from "react";
import Options from "./options";

function Question({ questions, index, dispatch, hasAnswered, time }) {
  

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "Tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="main">
      <h2 className="question">{questions[index].question}</h2>
      <div className="options">
        <Options
          options={questions[index].options}
          questions={questions}
          dispatch={dispatch}
          hasAnswered={hasAnswered}
          index={index}
          time={time}
        />
      </div>
    </div>
  );
}

export default Question;
