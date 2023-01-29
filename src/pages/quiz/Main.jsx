import React, { useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";
import { nanoid } from "nanoid";

export default function Main(props) {
  const [checkAnswers, setCheckAnswers] = useState("false");
  const [selectedAnswerArray, setSelectedAnswerArray] = useState(
    props.quizData.map((quizSet) => ({
      [quizSet.questionId]: "",
    }))
  );

  console.log(selectedAnswerArray);

  const quizElements = props.quizData.map((quizSet) => {
    return (
      <QuizRow
        key={quizSet.questionId}
        id={quizSet.questionId}
        quizSet={quizSet}
        answerIsSelected={answerIsSelected}
        // testSelected={selectedAnswerArray[quizSet.questionId]}
      />
    );
  });

  function answerIsSelected(questionId, answerId) {
    setSelectedAnswerArray((prevState) => ({
      ...prevState,
      [questionId]: answerId,
    }));
    console.log(selectedAnswerArray);
  }

  function handleClick(e) {
    const quizBtn = document.getElementById(e.target.id);
    // const scoreText = document.getElementById("score-text");
    quizBtn.innerText = "Play again";
    // console.log(quizBtn.parentElement);
    setCheckAnswers(true);
    props.resetQuiz();
  }

  return (
    <main>
      {quizElements}
      <p id="score-text">You scored /5 correct answers</p>
      <QuizBtn
        id="check-answers"
        handleClick={(e) => handleClick(e)}
        text={"Check answers"}
      />
    </main>
  );
}
