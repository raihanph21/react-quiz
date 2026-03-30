function FinishScreen({ score, totalPoints }) {
  const percentage = score / totalPoints;
  return (
    <p className="result">
      You scored <strong>{score} </strong>out of {totalPoints} (
      {Math.ceil(percentage)})%
    </p>
  );
}

export default FinishScreen;
