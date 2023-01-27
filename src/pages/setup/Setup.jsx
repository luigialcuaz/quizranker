import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Setup() {
  return (
    <div className="container">
      <h1>Quizzical</h1>
      <p>This quiz is pretty hard...</p>
      <QuizBtn className="quiz-btn" text="Start quiz" />
    </div>
  );
}
