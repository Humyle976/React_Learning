import "./app.css";
import { useReducer } from "react";
import Header from "./components/header";
import { useEffect } from "react";
import Question from "./components/question";
import Main from "./components/main";
import Loader from "./components/loader";
import Start from "./components/start";
import Error from "./components/error";
import Result from "./components/result";
import Progress from "./components/progress";

const SEC_PER_QUESTION = 30;
const initialState = {
  questions: [],
  index: null,
  points: 0,
  status: "loading",
  answer: null,
  time: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "Error":
      return { ...state, status: "error" };
    case "QuestionReceived":
      return {
        ...state,
        questions: action.payload,
        status: "loaded",
        index: 0,
      };
    case "Ready":
      return {
        ...state,
        status: "ready",
        time: state.questions.length * SEC_PER_QUESTION,
      };
    case "Answered":
      return {
        ...state,
        points:
          action.payload === state.questions[state.index].correctOption
            ? state.points + state.questions[state.index].points
            : state.points,
        answer: action.payload,
        status:
          state.index === state.questions.length - 1
            ? "finished"
            : state.status,
      };
    case "Next":
      return { ...state, index: state.index + 1, answer: null };
    case "Tick":
      return {
        ...state,
        time: state.time - 1,
        status: state.time === 0 ? "finished" : state.status,
      };
    case "Restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        time: state.questions.length * SEC_PER_QUESTION,
        answer: null,
        points: 0,
      };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function Query() {
      try {
        const res = await fetch("http://localhost:8001/questions");
        if (!res.ok) {
          dispatch({ type: "Error" });
          throw new Error("Couldn't fetch the response");
        }

        const result = await res.json();
        dispatch({ type: "QuestionReceived", payload: result });
      } catch (err) {
        console.log(err);
      }
    }
    Query();
  }, []);
  return (
    <div className="app">
      <Header />
      {state.status === "ready" && (
        <Progress index={state.index} maxQuestions={state.questions.length} />
      )}
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "loaded" && (
          <Start questionLength={state.questions.length} dispatch={dispatch} />
        )}
        {state.status === "ready" && (
          <Question
            questions={state.questions}
            index={state.index}
            dispatch={dispatch}
            hasAnswered={state.answer}
            time={state.time}
          />
        )}
        {state.status === "finished" && (
          <Result
            points={state.points}
            questions={state.questions}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
