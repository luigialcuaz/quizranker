import React from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";

export default function Main(props) {
  console.log(props.quizData);
  return (
    <main>
      <QuizRow />
      <QuizRow />
      <QuizRow />
      <QuizRow />
      <QuizRow />
      <QuizBtn text="Check answers" />
    </main>
  );
}
