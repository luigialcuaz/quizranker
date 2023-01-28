import { nanoid } from "nanoid";
import shuffle from "./shuffleAnswers";

export default function createData(data) {
  const { incorrect_answers, correct_answer, question } = data;
  const correctAnswerId = nanoid();

  const answersArray = incorrect_answers.map((answer) => ({
    answer,
    id: nanoid(),
  }));

  answersArray.push({
    answer: correct_answer,
    id: correctAnswerId,
  });

  return {
    question,
    answersArray: shuffle(answersArray),
    correctAnswerId,
  };
}
