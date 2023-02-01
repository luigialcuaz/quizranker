import React, { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import Forms from "./pages/intro/Forms";
import Main from "./pages/quiz/Main";
import getQuestionData from "./util/getQuestionData";
import getFormData from "./util/getFormData";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";
import getEntertainmentData from "./util/getEntertainmentData";

export default function App() {
  const [quizStatus, setQuizStatus] = useState({
    page: "Intro",
    prevScore: 0,
  });

  const [entertainmentData, setEntertainmentData] = useState();
  const [questionData, setQuestionData] = useState();

  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    getEntertainmentData().then(data => {
      setEntertainmentData(data.trivia_categories);
    });
  }, []);

  function nextPage(e, nextPage) {
    if (e.target.id === "forms-btn"){
      e.preventDefault();
      getQuestionData(
        getFormData(e.target.id)
      ).then(data => {
        setQuestionData(data);
      });
    }
    
    setQuizStatus((prevStatus) => ({
      ...!prevStatus,
      page: nextPage,
    }));
  }

  function currentPage() {
    switch (quizStatus.page) {
      case "Intro":
        return (
          <Intro
            nextPage={(e) => nextPage(e, "Forms")}
          />
        );
      case "Forms":
        return <Forms 
          entertainmentData={entertainmentData} 
          nextPage={(e) => nextPage(e, "Main")} 
        />;
      case "Main":
        return (
          questionData ? 
          <Main
          quizStatus={quizStatus}
          questionData={questionData}
          // resetQuiz={toggleQuiz}
          />
          :
          <div>Loading...</div>
        );
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
