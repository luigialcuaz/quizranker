import React from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";

export default function Main(props) {
  console.log(props.quizData);
  // const quizElements = props.quizData.map((quiz) => (
  //   <QuizRow quiz={props.quiz} />
  // ));

  return (
    <main>
      {/* {quizElements} */}
      <QuizBtn text="Check answers" />
    </main>
  );
}
