import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import shuffle from "../../util/shuffleAnswers";
import QuizRow from "./QuizRow";

export default function Main(props) {
  const [questionData, setQuestionData] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState();
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&type=multiple${
          props.formData ? "&" + props.formData : ""
        }`
      );
      const data = await res.json();
      const questionData = data.results.map((quizData) => formatData(quizData));

      setQuestionData(questionData);
      setSelectedAnswerIds(() => {
        let questionIds = {};
        for (const quizSet of questionData) {
          questionIds[quizSet.questionId] = "";
        }
        return questionIds;
      });
    };

    getData();
  }, []);

  function formatData(data) {
    const { incorrect_answers, correct_answer, question } = data;
    const correctAnswerId = nanoid();

    const answersArray = incorrect_answers.map((answer) => ({
      answer: decodeHtml(answer),
      id: nanoid(),
    }));

    answersArray.push({
      answer: decodeHtml(correct_answer),
      id: correctAnswerId,
    });

    return {
      question: decodeHtml(question),
      questionId: nanoid(),
      answersArray: shuffle(answersArray),
      correctAnswerId,
    };
  }

  function decodeHtml(string) {
    const text = document.createElement("textarea");
    text.innerHTML = string;
    return text.value;
  }

  const quizElements = questionData
    ? questionData.map((quizSet) => {
        return (
          <QuizRow
            key={quizSet.questionId}
            quizSet={quizSet}
            answerSelected={answerSelected}
            idSelected={selectedAnswerIds[quizSet.questionId]}
            isComplete={isComplete}
          />
        );
      })
    : null;

  function answerSelected(questionId, answerId) {
    setSelectedAnswerIds((prevAnswerIds) => ({
      ...prevAnswerIds,
      [questionId]: answerId,
    }));
  }

  function completeQuiz() {
    if (!isComplete) {
      for (let answerId in selectedAnswerIds) {
        for (let quizSet of questionData) {
          if (selectedAnswerIds[answerId] === quizSet.correctAnswerId) {
            setCorrectCount((prevCount) => prevCount + 1);
          }
        }
      }
      const scoreText = document.querySelector(".score-text.bold.none");
      scoreText.classList.remove("none");

      setIsComplete(true);
    }
  }

  return (
    <>
      {quizElements ? (
        <main>
          {quizElements}
          <p className="score-text bold none">
            You scored {correctCount}/5 correct answers
          </p>
          {isComplete ? (
            <QuizBtn
              id="check-answers"
              className="quiz-btn"
              path="quiz"
              text="Play again"
            />
          ) : (
            <button
              id="check-answers"
              className="quiz-btn"
              onClick={completeQuiz}
            >
              Check answers
            </button>
          )}
        </main>
      ) : (
        <div className="container-intro-page loading-text">Loading...</div>
      )}
    </>
  );
}
