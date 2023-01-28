import React, { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import Main from "./pages/quiz/Main";
import fetchApi from "./services/fetchApi";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

export default function App() {
  const [quizStatus, setQuizStatus] = useState({
    intro: true,
  });

  const [quizData, setQuizData] = useState();

  useEffect(() => setQuizData(fetchApi()), []);

  function startQuiz() {
    setQuizStatus({ intro: false });
  }

  return (
    <>
      <img
        className="top-right-blob"
        alt="a yellow half-circle shaped blob on the top right corner of the screen"
        src={yellowBlob}
      />
      {quizStatus.intro ? (
        <Intro handleClick={startQuiz} />
      ) : (
        <Main quizData={quizData} />
      )}
      <img
        className="bot-left-blob"
        alt="a blue half-circle shaped blob on the bottom left corner of the screen"
        src={blueBlob}
      />
    </>
  );
}
