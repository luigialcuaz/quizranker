import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { difficultyData } from "../../assets/difficultyData";

export default function QuizForm(props) {
  const [categoryList, setCategoryList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategoryList(data.trivia_categories);
    };

    getCategoryList();
  }, []);

  const categoryElements = categoryList
    ? categoryList.map((category) => (
        <option key={nanoid()} value={category.id}>
          {category.name}
        </option>
      ))
    : null;

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

    return navigate("/quiz/main");
  }

  return (
    <>
      {categoryElements && difficultyElements ? (
        <div className="container-intro-page">
          <h1>QuizRanker</h1>
          <form id="quiz-form">
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
            <button
              className="quiz-btn"
              id="quizForm-btn"
              onClick={submitQuizForm}
            >
              Start quiz
            </button>
          </form>
        </div>
      ) : (
        <div className="container-intro-page loading-text">Loading...</div>
      )}
    </>
  );
}
