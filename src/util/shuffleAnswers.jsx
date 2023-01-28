import { nanoid } from "nanoid";

export default function shuffleAnswers(incorrectArr, correctAnswer) {
  const answersArray = incorrectArr.map((answer) => ({
    answer,
    isCorrect: false,
    id: nanoid(),
  }));

  answersArray.push({
    answer: correctAnswer,
    isCorrect: true,
    id: nanoid(),
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
