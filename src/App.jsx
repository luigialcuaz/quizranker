import React, { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import Main from "./pages/quiz/Main";
import createData from "./util/createData";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

export default function App() {
  const [quizStatus, setQuizStatus] = useState({
    hasStarted: false,
    hiscore: 0,
  });

  const [quizData, setQuizData] = useState();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuizData(
          data.results.map((data) => {
            return createData(data);
          })
        );
      });
  }, []);

  function changePhase() {
    setQuizStatus((prevState) => ({
      hasStarted: !prevState.hasStarted,
      hiscore: prevState.hiscore,
    }));
  }

  return (
    <>
      <img
        className="top-right-blob"
        alt="a yellow half-circle shaped blob on the top right corner of the screen"
        src={yellowBlob}
      />
      {quizStatus.hasStarted ? (
        <Main
          quizStatus={quizStatus}
          quizData={quizData}
          changePhase={changePhase}
        />
      ) : (
        <Intro handleClick={() => changePhase()} />
      )}
      <img
        className="bot-left-blob"
        alt="a blue half-circle shaped blob on the bottom left corner of the screen"
        src={blueBlob}
      />
    </>
  );
}
