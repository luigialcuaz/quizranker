import React from "react";

export default function Answer(props) {
  // function

  return (
    <button
      onClick={props.answerSelected}
      className={
        props.isSelected === props.id ? "answer-btn selected" : "answer-btn"
      }
    >
      {props.answer}
    </button>
  );
}
