import React, { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import QuizForm from "./pages/intro/QuizForm";
import Main from "./pages/quiz/Main";
import User from "./pages/profile/User";
import getQuestionData from "./util/getQuestionData";
import getFormData from "./util/getFormData";
import getEntertainmentData from "./util/getEntertainmentData";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [appPage, setAppPage] = useState('intro');
  const [entertainmentData, setEntertainmentData] = useState();
  const [questionData, setQuestionData] = useState();

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

    if(nextPage === 'intro') {
      setQuestionData();
    }
    // setAppPage(nextPage);
  }

  // function currentPage() {
  //   switch (appPage) {
  //     case "intro":
  //       return (
  //         <Intro
  //           nextPage={(e) => nextPage(e, "forms")}
  //         />
  //       );
  //     case "forms":
  //       return (
  //         entertainmentData ? 
  //         <QuizForm 
  //           entertainmentData={entertainmentData} 
  //           nextPage={(e) => nextPage(e, "main")} 
  //         />
  //         :
  //         <div className="loading-text">Loading...</div>
  //       );
  //     case "main":
  //       return (
  //         questionData ? 
  //         <Main
  //           appPage={appPage}
  //           questionData={questionData}
  //           nextPage={(e) => nextPage(e, "intro")} 
  //         />
  //         :
  //         <div className="loading-text">Loading...</div>
  //       );
  //   }
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/user" element={<User />} />
        <Route path="/quizForm" element={<QuizForm />} />
      </Routes>
      {/* {currentPage()} */}
    </>
  );
}
