import React from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";
import { nanoid } from "nanoid";

export default function Main(props) {
  const quizElements = props.quizData.map((quizSet) => (
    <QuizRow key={nanoid()} quizSet={quizSet} />
  ));

  return (
    <main>
      {quizElements}
      <QuizBtn
        text={
          props.quizStatus.phase === "main" ? "Check answers" : "Play again"
        }
        handleClick={
          props.quizStatus.phase === "main"
            ? () => props.changePhase("end")
            : () => props.changePhase("intro")
        }
      />
    </main>
  );
}
