import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Intro(props) {
  return (
    <div className="container-intro-page">
      <h1>Quizzical</h1>
      <p>This quiz is pretty hard...</p>
      <QuizBtn
        handleClick={props.nextPage}
        className="quiz-btn"
        id="intro-btn"
        text="Start"
      />
    </div>
  );
}
