import shuffleAnswers from "../util/shuffleAnswers";

export default function fetchApi() {
  let quizData = [];
  fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then((res) => res.json())
    .then((data) => {
      quizData = data.results.map((data) => {
        const { incorrect_answers, correct_answer, question } = data;
        const answersArr = shuffleAnswers(incorrect_answers, correct_answer);
        return [question, answersArr];
      });
    });
  console.log(quizData);
  return quizData;
}

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
