import React, { useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";

export default function Main(props) {
  console.log(props.questionData);

  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState(() => {
    let questionIds = {};
    for (const quizSet of props.questionData) {
      questionIds[quizSet.questionId] = "";
    }
    return questionIds;
  });
  let count = 0;

  const quizElements = props.questionData.map((quizSet) => {
    return (
      <QuizRow
        key={quizSet.questionId}
        id={quizSet.questionId}
        correctAnswerId={quizSet.correctAnswerId}
        question={quizSet.question}
        answersArray={quizSet.answersArray}
        answerSelected={answerSelected}
        idSelected={selectedAnswerIds[quizSet.questionId]}
        isComplete={isComplete}
      />
    );
  });

  function answerSelected(questionId, answerId) {
    setSelectedAnswerIds((prevAnswerIds) => ({
      ...prevAnswerIds,
      [questionId]: answerId,
    }));
  }

  function completeQuiz(e) {
    const scoreText = document.getElementById("score-text");
    if (!isComplete) {
      for (let answerId in selectedAnswerIds) {
        for (let quizSet of props.questionData) {
          if (selectedAnswerIds[answerId] === quizSet.correctAnswerId) {
            count++;
          }
        }
      }
      setIsComplete(true);
      scoreText.innerText = `You scored ${count}/5 correct answers`;
    } else {
      props.resetQuiz();
    }
  }

  // function retrieveCompleteAnswers() {
  //   const correctAnswers =
  //     document.getElementsByClassName("answer-btn correct");
  //   return correctAnswers.length;
  // }

  //current I manipulate dom to change the score
  //this is because my let count=0; renders after setIsComplete(true)
  //should change count/score to a state

  return (
    <main>
      {quizElements}
      <p id="score-text">You scored 0/5 correct answers</p>
      <QuizBtn
        id="check-answers"
        handleClick={(e) => completeQuiz(e)}
        text={isComplete ? "Play again" : "Check answers"}
      />
    </main>
  );
}
