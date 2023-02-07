import { nanoid } from "nanoid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { difficultyData } from "../../assets/difficultyData";

export default function QuizForm(props) {
  const navigate = useNavigate();

  const categoryElements = props.categoryList.map((category) => (
    <option key={nanoid()} value={category.id}>
      {category.name}
    </option>
  ));

  const difficultyElements = difficultyData.map((difficulty) => (
    <option key={nanoid()} value={difficulty.value}>
      {difficulty.difficulty}
    </option>
  ));

  function submitQuizForm(e) {
    e.preventDefault();
    const quizForm = document.getElementById(e.target.id).parentElement;
    const quizFormData = new FormData(quizForm);

    let category = "";
    let difficulty = "";

    if (quizFormData.get("category")) {
      category = `category=${quizFormData.get("category")}`;
    }

    if (quizFormData.get("difficulty")) {
      difficulty = `difficulty=${quizFormData.get("difficulty")}`;
    }

    props.getQuizForm(
      `${difficulty + (category && difficulty ? "&" + category : category)}`
    );

    console.log("worked");
    return navigate("/main");
  }

  return (
    <div className="container-intro-page">
      <h1>Quizzical</h1>
      <form id="quiz-form" onSubmit={submitQuizForm}>
        <div className="select-container">
          <label htmlFor="category">Category:</label>
          <select name="category">
            <option value="">All Categories</option>
            {categoryElements}
          </select>
        </div>
        <div className="select-container">
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty">
            <option value="">Any Difficulty</option>
            {difficultyElements}
          </select>
        </div>
        <button className="quiz-btn" id="quizForm-btn" onClick={submitQuizForm}>
          Start quiz
        </button>
      </form>
    </div>
  );
}
