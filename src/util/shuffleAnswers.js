export default function shuffleAnswers(answersArray) {
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
