function Progress({ index, numQuestions, score, totalPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{score} </strong>/ {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
