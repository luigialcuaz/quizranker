import React from "react";
import AnswerBtn from "./AnswerBtn";

export default function QuizRow(props) {
  const answerElements = props.quizSet.answersArray.map((answerObj) => {
    return (
      <AnswerBtn
        key={answerObj.id}
        answer={answerObj.answer}
        isSelected={props.idSelected === answerObj.id}
        isCorrect={answerObj.id === props.quizSet.correctAnswerId}
        answerSelected={(e) => answerSelected(e, answerObj.id)}
        quizComplete={props.isComplete}
      />
    );
  });

  function answerSelected(e, answerId) {
    props.answerSelected(props.quizSet.questionId, answerId);
  }

  return (
    <div className="container-quiz">
      <h2>{props.quizSet.question}</h2>
      <section>{answerElements}</section>
    </div>
  );
}
