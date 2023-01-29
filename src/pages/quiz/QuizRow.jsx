import React, { useState } from "react";
import Answer from "./Answer";

export default function QuizRow(props) {
  const [isSelected, setIsSelected] = useState("");

  const answerElements = props.quizSet.answersArray.map((answerObj) => {
    return (
      <Answer
        key={answerObj.id}
        id={answerObj.id}
        answer={answerObj.answer}
        isSelected={isSelected === answerObj.id}
        answerSelected={(e) => answerSelected(e, answerObj.id)}
      />
    );
  });

  function answerSelected(e, answerId) {
    props.answerIsSelected(props.id, answerId);
    setIsSelected(answerId);
  }

  return (
    <div className="container-quiz">
      <h2>{props.quizSet.question}</h2>
      {answerElements}
    </div>
  );
}
