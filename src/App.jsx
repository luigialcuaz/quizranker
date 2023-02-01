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
  const [appPage, setAppPage] = useState();

  const [entertainmentData, setEntertainmentData] = useState();
  const [questionData, setQuestionData] = useState();

  const [resetCount, setResetCount] = useState();

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
    
    setAppPage(nextPage);
  }

  function currentPage() {
    switch (appPage) {
      case "Intro":
        return (
          <Intro
            nextPage={(e) => nextPage(e, "Forms")}
          />
        );
      case "Forms":
        return (
          entertainmentData ? 
          <Forms 
            entertainmentData={entertainmentData} 
            nextPage={(e) => nextPage(e, "Main")} 
          />
          :
          <div>Loading...</div>
        );
      case "Main":
        return (
          questionData ? 
          <Main
            appPage={appPage}
            questionData={questionData}
            // resetQuiz={toggleQuiz}
          />
          :
          <div>Loading...</div>
        );
    }
  };

  return (
    <>
      <img
        className="top-right-blob"
        alt="a yellow half-circle shaped blob on the top right corner of the screen"
        src={yellowBlob}
      />
      {appPage ? currentPage() : 
        <Intro nextPage={(e) => nextPage(e, "Forms")}/>
      }
      <img
        className="bot-left-blob"
        alt="a blue half-circle shaped blob on the bottom left corner of the screen"
        src={blueBlob}
      />
    </>
  );
}
