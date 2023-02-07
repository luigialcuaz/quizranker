import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import User from "./pages/profile/User";
import Intro from "./pages/quiz/Intro";
import Main from "./pages/quiz/Main";
import QuizForm from "./pages/quiz/QuizForm";
import getFormData from "./util/getFormData";
import getQuestionData from "./util/getQuestionData";

export default function App() {
  const [categoryList, setCategoryList] = useState();
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategoryList(data.trivia_categories);
    };

    getCategoryList();
  }, []);

  function nextPage(e, nextPage) {
    if (e.target.id === "forms-btn") {
      e.preventDefault();
      getQuestionData(getFormData(e.target.id)).then((data) => {
        setQuestionData(data);
      });
    }

    if (nextPage === "intro") {
      setQuestionData();
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/quizForm"
          element={
            <QuizForm
              categoryList={categoryList}
              // nextPage={(e) => nextPage(e, "main")}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              questionData={questionData}
              nextPage={(e) => nextPage(e, "intro")}
            />
          }
        />
      </Routes>
    </>
  );
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
//         CategoryData ?
//         <QuizForm
//           CategoryData={CategoryData}
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
