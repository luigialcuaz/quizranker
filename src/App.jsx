import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import User from "./pages/profile/User";
import Intro from "./pages/quiz/Intro";
import Main from "./pages/quiz/Main";
import QuizForm from "./pages/quiz/QuizForm";

export default function App() {
  const [categoryList, setCategoryList] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategoryList(data.trivia_categories);
    };

    getCategoryList();
  }, []);

  function getQuizForm(formData) {
    setFormData(formData);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/quizForm"
          element={
            <QuizForm categoryList={categoryList} getQuizForm={getQuizForm} />
          }
        />
        <Route path="/main" element={<Main formData={formData} />} />
      </Routes>
    </>
  );
}

// function submitQuizForm(e) {
//     e.preventDefault();
//     getQuestionData(getFormData(e.target.id)).then((data) => {
//       setQuestionData(data);
//     });

//   // setQuestionData();
// }

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
