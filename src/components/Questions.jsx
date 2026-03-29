import Options from "./Options";

function Questions({
  questions,
  dispatch,
  answer,
  score,
  totalPoints,
  numQuestions,
  index,
}) {
  return (
    <div>
      <h4>
        {index + 1} out of {numQuestions}
      </h4>
      <h4>
        Score: {score}/{totalPoints}
      </h4>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
