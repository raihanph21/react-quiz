import Options from "./Options";
import Progress from "./Progress";

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
      <Progress
        index={index}
        numQuestions={numQuestions}
        score={score}
        totalPoints={totalPoints}
      />
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
