import React from "react";

export default function QuizBtn(props) {
  return (
    <button onClick={props.handleClick} className="quiz-btn" id={props.id}>
      {props.text}
    </button>
  );
}
