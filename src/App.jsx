import React, { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import Forms from "./pages/intro/Forms";
import Main from "./pages/quiz/Main";
import createData from "./util/createData";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

export default function App() {
  const [quizStatus, setQuizStatus] = useState({
    page: "Intro",
    prevScore: 0,
  });

  const [quizData, setQuizData] = useState();
  const [resetCount, setResetCount] = useState(0);

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

  function nextPage(e, nextPage) {
    setQuizStatus((prevStatus) => ({
      ...!prevStatus,
      page: nextPage,
    }));
    // setQuizStatus((prevState) => ({
    //   hasStarted: !prevState.hasStarted,
    //   hiscore: prevState.hiscore,
    // }));

    // if (quizStatus.hasStarted === true) {
    //   setResetCount((prevCount) => prevCount + 1);
    // }
  }

  const currentPage = () => {
    switch (quizStatus.page) {
      case "Intro":
        return (
          <Intro
            title="Quizzical"
            description="This quiz is pretty hard..."
            nextPage={(e) => nextPage(e, "Forms")}
          />
        );
      case "Forms":
        return <Forms nextPage={(e) => nextPage(e, "Main")} />;
      case "Main":
        <Main
          quizStatus={quizStatus}
          quizData={quizData}
          // resetQuiz={toggleQuiz}
        />;
        break;
    }
  };

  return (
    <>
      <img
        className="top-right-blob"
        alt="a yellow half-circle shaped blob on the top right corner of the screen"
        src={yellowBlob}
      />
      {currentPage()}
      {/* <Intro
        title="Quizzical"
        description="This quiz is pretty hard..."
        nextPage={(e) => nextPage(e, "Forms")}
      /> */}
      {/* {quizStatus.hasStarted ? (
        <Main
          quizStatus={quizStatus}
          quizData={quizData}
          resetQuiz={toggleQuiz}
        />
      ) : (
        <Intro
          title="Quizzical"
          description="This quiz is pretty hard..."
          handleClick={toggleQuiz}
        />
      )} */}
      <img
        className="bot-left-blob"
        alt="a blue half-circle shaped blob on the bottom left corner of the screen"
        src={blueBlob}
      />
    </>
  );
}
