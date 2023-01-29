import React, { useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";

export default function Main(props) {
  const [checkAnswers, setCheckAnswers] = useState("false");
  const [selectedAnswerIds, setSelectedAnswerIds] = useState(() => {
    let questionIds = {};
    for (const quizSet of props.quizData) {
      questionIds[quizSet.questionId] = "";
    }
    return questionIds;
  });

  const quizElements = props.quizData.map((quizSet) => {
    return (
      <QuizRow
        key={quizSet.questionId}
        id={quizSet.questionId}
        question={quizSet.question}
        answersArray={quizSet.answersArray}
        answerSelected={answerSelected}
        idSelected={selectedAnswerIds[quizSet.questionId]}
      />
    );
  });

  function answerSelected(questionId, answerId) {
    setSelectedAnswerIds((prevAnswerIds) => ({
      ...prevAnswerIds,
      [questionId]: answerId,
    }));
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
