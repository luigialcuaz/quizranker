import React from "react";

export default function QuizBtn(props) {
  return (
    <button
      onClick={props.handleClick}
      className={props.className}
      id={props.id}
    >
      {props.text}
    </button>
  );
}
