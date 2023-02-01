import React, { useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import QuizRow from "./QuizRow";

export default function Main(props) {

  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState(() => {
    let questionIds = {};
    for (const quizSet of props.questionData) {
      questionIds[quizSet.questionId] = "";
    }
    return questionIds;
  });
  const [correctCount, setCorrectCount] = useState(0);

  const quizElements = props.questionData.map((quizSet) => {
    return (
      <QuizRow
        key={quizSet.questionId}
        quizSet={quizSet}
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
    if (!isComplete) {
      for (let answerId in selectedAnswerIds) {
        for (let quizSet of props.questionData) {
          if (selectedAnswerIds[answerId] === quizSet.correctAnswerId) {
            setCorrectCount(prevCount => prevCount + 1);
          }
        }
      }
      const scoreText = document.querySelector('.score-text.none');
      scoreText.classList.remove('none');

      setIsComplete(true);
    } else {
      props.nextPage(e);
    }
  }

  return (
    <main>
      {quizElements}
      <p className="score-text none">You scored {correctCount}/5 correct answers</p>
      <QuizBtn
        id="check-answers"
        className="quiz-btn"
        handleClick={(e) => completeQuiz(e)}
        text={isComplete ? "Play again" : "Check answers"}
      />
    </main>
  );
}
