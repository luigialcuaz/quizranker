import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Intro(props) {
  return (
    <div className="container-intro-page">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <QuizBtn
        handleClick={props.nextPage}
        className="quiz-btn"
        id="intro-btn"
        text="Start"
      />
    </div>
  );
}
