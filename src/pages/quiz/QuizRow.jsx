import React from "react";
import Answer from "./Answer";

export default function QuizRow(props) {
  // const answerElements = dataArr.map(data => (
  //   <Answer
  //     answersArray={}
  //   />
  // ))
  return (
    <div className="container-quiz">
      <h2>{props.quizData.question}</h2>
      <Answer answersArray={props.quizData.answersArray} />
      <Answer answersArray={props.quizData.answersArray} />
      <Answer answersArray={props.quizData.answersArray} />
      <Answer answersArray={props.quizData.answersArray} />
    </div>
  );
}
