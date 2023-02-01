import { nanoid } from "nanoid";
import { decode } from 'html-entities'
import shuffle from "./shuffleAnswers";

export default function createData(data) {
  const { incorrect_answers, correct_answer, question } = data;
  const correctAnswerId = nanoid();

  const answersArray = incorrect_answers.map((answer) => ({
    answer: decode(answer),
    id: nanoid(),
  }));

  answersArray.push({
    answer: decode(correct_answer),
    id: correctAnswerId,
  });

  return {
    question: decode(question),
    questionId: nanoid(),
    answersArray: shuffle(answersArray),
    correctAnswerId,
  };
}
