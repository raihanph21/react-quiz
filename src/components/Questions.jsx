import Options from "./Options";

function Questions({ questions, dispatch, answer, score }) {
  return (
    <div>
      <h4>{score}</h4>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
