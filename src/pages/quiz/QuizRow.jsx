import React, { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function QuizRow(props) {
  const [isSelected, setIsSelected] = useState("");

  const answerElements = props.quizSet.answersArr.map((answerObj) => {
    return (
      <Answer
        key={answerObj.id}
        id={answerObj.id}
        answer={answerObj.answer}
        isCorrect={answerObj.isCorrect}
        isSelected={isSelected}
        answerSelected={(e) => answerSelected(e, answerObj.id)}
      />
    );
  });

  function answerSelected(e, id) {
    setIsSelected(id);
  }

  return (
    <div className="container-quiz">
      <h2>{props.quizSet.question}</h2>
      {answerElements}
    </div>
  );
}
