import React, { useEffect } from "react";
import Intro from "./pages/intro/Intro";
import Main from "./pages/quiz/Main";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

export default function App() {
  let quizData = [];
  fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then((res) => res.json())
    .then((data) => (quizData = data.results))
    .then(() => console.log(quizData));
  /*
        data
        returns {
          response_code: 0
          results: (5)[
            { 
              category: "Entertainment: Cartoon & Animations"
              correct_answer: "Slam dunk, nothing but net!"
              difficulty: "easy"
              incorrect_answers: [
                'Hit the sack, Jack!', 'Rikki-Tikki-Tavi, biatch!', 'Wubba-lubba-dub-dub!'
              ]
              question: "Which of these is NOT a catchphrase used by Rick Sanchez in the TV show &quot;Rick and Morty&quot;?"
              type: "multiple"
            }
          ]
        } 
    */
  const test = false;
  return (
    <>
      <img
        className="top-right-blob"
        alt="a yellow half-circle shaped blob on the top right corner of the screen"
        src={yellowBlob}
      />
      {test ? <Intro /> : <Main quizData={quizData} />}
      <img
        className="bot-left-blob"
        alt="a blue half-circle shaped blob on the bottom left corner of the screen"
        src={blueBlob}
      />
    </>
  );
}
