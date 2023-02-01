import React from "react";

export default function Answer(props) {
  if (props.quizComplete && props.isSelected) {
    return (
      <button
        onClick={undefined}
        className={
          props.isCorrect ? "answer-btn correct" : "answer-btn incorrect"
        }
      >
        {props.answer}
      </button>
    );
  } else if (props.quizComplete){
    return (
      <button
        onClick={undefined}
        className={props.isCorrect ? "answer-btn correct" : "answer-btn translucent"}
      >
        {props.answer}
      </button>
    )
  } else {
    return (
      <button
        onClick={!props.quizComplete ? props.answerSelected : undefined}
        className={props.isSelected ? "answer-btn selected" : "answer-btn"}
      >
        {props.answer}
      </button>
    );
  }
}
