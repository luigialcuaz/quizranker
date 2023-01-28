import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function QuizRow(props) {
  const answerElements = props.quizSet.answersArr.map((answerObj) => (
    <Answer
      key={nanoid()}
      answer={answerObj.answer}
      isCorrect={answerObj.isCorrect}
    />
  ));
  return (
    <div className="container-quiz">
      <h2>{props.quizSet.question}</h2>
      {answerElements}
    </div>
  );
}
