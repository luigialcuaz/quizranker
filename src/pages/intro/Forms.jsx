import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Forms(props) {
  return (
    <div className="container-intro-page">
      <p>test</p>
      <QuizBtn
        handleClick={props.nextPage}
        className="quiz-btn"
        text="Start quiz"
      />
    </div>
  );
}
