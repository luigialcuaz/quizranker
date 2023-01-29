import React, { useState } from "react";
import Answer from "./Answer";

export default function QuizRow(props) {
  const answerElements = props.answersArray.map((answerObj) => {
    return (
      <Answer
        key={answerObj.id}
        id={answerObj.id}
        answer={answerObj.answer}
        isSelected={props.idSelected === answerObj.id}
        isCorrect={answerObj.id === props.correctAnswerId}
        answerSelected={(e) => answerSelected(e, answerObj.id)}
        quizComplete={props.isComplete}
      />
    );
  });

  function answerSelected(e, answerId) {
    props.answerSelected(props.id, answerId);
  }

  return (
    <div className="container-quiz">
      <h2>{props.question}</h2>
      {answerElements}
    </div>
  );
}
