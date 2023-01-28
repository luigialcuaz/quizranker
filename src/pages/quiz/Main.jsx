import React from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";
import { nanoid } from "nanoid";

export default function Main(props) {
  const quizElements = props.quizData.map((quizSet) => (
    <QuizRow key={nanoid()} quizSet={quizSet} />
  ));

  function checkAnswers() {
    console.log("check");
  }

  return (
    <main>
      {quizElements}
      {props.quizStatus.phase === "end" && (
        <p className="score-text">
          You scored {props.quizStatus.score}/5 correct answers
        </p>
      )}
      <QuizBtn
        text={
          props.quizStatus.phase === "main" ? "Check answers" : "Play again"
        }
        // handleClick={}
      />
    </main>
  );
}
