import { useEffect, useReducer } from "react";
import Header from "./Header";
import Utama from "./Utama";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  //'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  const currentQuestion = state.questions.at(state.index);

  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === currentQuestion.correctOption
            ? state.score + currentQuestion.points
            : state.score,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.score > state.highscore ? state.score : state.highscore,
      };
    case "restart":
      // return {
      //   ...initialState,
      //   questions: state.questions,
      //   status: "ready",
      // };
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        score: 0,
        secondsRemaining: 10,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, score, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const totalPoints = questions.reduce((sum, item) => sum + item.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Utama>
        {status === "loading" && <Loader />}{" "}
        {/*if status equals "loading" (true), then return the second value */}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "active" && (
          <>
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
              score={score}
              totalPoints={totalPoints}
              numQuestions={numQuestions}
              index={index}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            score={score}
            totalPoints={totalPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Utama>
    </div>
  );
}
