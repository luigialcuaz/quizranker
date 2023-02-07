import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import QuizBtn from "../../components/QuizBtn";
import shuffle from "../../util/shuffleAnswers";

export default function Main(props) {
  const [questionData, setQuestionData] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState();
  //   () => {
  //   let questionIds = {};
  //   for (const quizSet of props.questionData) {
  //     questionIds[quizSet.questionId] = "";
  //   }
  //   return questionIds;
  // }
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&type=multiple${
        props.formData ? "&" + props.formData : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        const questionData = data.results.map((quizData) => {
          formatData(quizData);
        });
        console.log(questionData);

        setQuestionData(questionData);
        setSelectedAnswerIds(
          questionData.map((questionSet) => questionSet.correctAnswerId)
        );
      });
  }, []);

  // function getQuestionData(formData) {
  //   return fetch(
  //     `https://opentdb.com/api.php?amount=5&type=multiple${
  //       formData ? "&" + formData : ""
  //     }`
  //   )
  // .then((res) => res.json())
  // .then((data) => {
  //       return data.results.map((data) => {
  //         return formatQuestionData(data);
  //       });
  //     });
  // }

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

  // const quizElements = questionData.map((quizSet) => {
  //   return (
  //     <QuizRow
  //       key={quizSet.questionId}
  //       quizSet={quizSet}
  //       answerSelected={answerSelected}
  //       idSelected={selectedAnswerIds[quizSet.questionId]}
  //       isComplete={isComplete}
  //     />
  //   );
  // });

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
            setCorrectCount((prevCount) => prevCount + 1);
          }
        }
      }
      const scoreText = document.querySelector(".score-text.bold.none");
      scoreText.classList.remove("none");

      setIsComplete(true);
    } else {
      props.nextPage(e);
    }
  }

  return (
    <main>
      {/* {quizElements} */}
      <p className="score-text bold none">
        You scored {correctCount}/5 correct answers
      </p>
      <QuizBtn
        id="check-answers"
        className="quiz-btn"
        handleClick={(e) => completeQuiz(e)}
        text={isComplete ? "Play again" : "Check answers"}
      />
    </main>
  );
}
