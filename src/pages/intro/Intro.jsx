import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Intro() {
  return (
    <div className="container-intro">
      <h1>Quizzical</h1>
      <p>This quiz is pretty hard...</p>
      <QuizBtn text="Start quiz" />
    </div>
  );
}
