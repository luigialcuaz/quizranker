import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Intro(props) {
  return (
    <div className="container-intro">
      <h1>Quizzical</h1>
      <p>This quiz is pretty hard...</p>
      <QuizBtn handleClick={props.handleClick} text="Start quiz" />
    </div>
  );
}
