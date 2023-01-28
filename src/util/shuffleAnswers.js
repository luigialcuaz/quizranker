export default function shuffleAnswers(incorrectArr, correctAnswer) {
  const answersArray = incorrectArr.map((answer) => ({
    answer,
    correct: false,
  }));

  answersArray.push({
    answer: correctAnswer,
    correct: true,
  });

  let currentIndex = answersArray.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [answersArray[currentIndex], answersArray[randomIndex]] = [
      answersArray[randomIndex],
      answersArray[currentIndex],
    ];
  }

  return answersArray;
}
