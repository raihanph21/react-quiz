function Options({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((x, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswer ? (index === questions.correctOption ? "correct" : "wrong") : ""}`}
          key={x}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {x}
        </button>
      ))}
    </div>
  );
}

export default Options;
