import { nanoid } from "nanoid";
import React from "react";
import { difficultyData } from "../../assets/difficultyData";
import QuizBtn from "../../components/QuizBtn";

export default function QuizForm(props) {
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

  return (
    <div className="container-intro-page">
      <h1>Quizzical</h1>
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
        <QuizBtn
          className="quiz-btn"
          id="quizForm-btn"
          text="Start quiz"
          redirect="main"
          // handleClick={props.nextPage}
          // className="quiz-btn"
          // id="forms-btn"
          // text="Start quiz"
        />
      </form>
    </div>
  );
}
