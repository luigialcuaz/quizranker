import { nanoid } from "nanoid";
import shuffle from "./shuffleAnswers";

export default function createData(data) {
  const { incorrect_answers, correct_answer, question } = data;
  const correctAnswerId = nanoid();

  const answersArray = incorrect_answers.map((answer) => ({
    answer: decodeHtml(answer),
    id: nanoid(),
  }));

  answersArray.push({
    answer: decodeHtml(correct_answer),
    id: correctAnswerId,
  });

  return {
    question: decodeHtml(question),
    questionId: nanoid(),
    answersArray: shuffle(answersArray),
    correctAnswerId,
  };
}

function decodeHtml(string) {
  const text = document.createElement('textarea');
  text.innerHTML = string;
  return text.value;
}
