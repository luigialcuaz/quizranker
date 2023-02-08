import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./pages/quiz/Intro";
import Main from "./pages/quiz/Main";
import QuizForm from "./pages/quiz/QuizForm";

export default function App() {
  const [formData, setFormData] = useState();

  function getQuizForm(formData) {
    setFormData(formData);
  }

  return (
    <>
      <Routes>
        <Route path="/quiz">
          <Route index element={<Intro />} />
          <Route path="*" element={<Intro />} />
          <Route path="form" element={<QuizForm getQuizForm={getQuizForm} />} />
          <Route path="main" element={<Main formData={formData} />} />
        </Route>
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
