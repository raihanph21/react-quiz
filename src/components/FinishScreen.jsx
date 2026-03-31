function FinishScreen({ score, totalPoints }) {
  const percentage = score / totalPoints;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "	🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦";

  return (
    <p className="result">
      <span>{emoji}</span>You scored <strong>{score} </strong>out of{" "}
      {totalPoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
