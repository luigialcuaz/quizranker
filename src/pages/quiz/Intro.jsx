import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Intro(props) {
  return (
    <div className="container-intro-page">
      <h1>QuizRanker</h1>
      <p>Click the button to give it a try!</p>
      <QuizBtn
        className="quiz-btn"
        id="intro-btn"
        text="Start Quiz"
        redirect="quizForm"
      />
    </div>
  );
}
