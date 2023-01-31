import React from "react";
import QuizBtn from "../../components/QuizBtn";

export default function Forms(props) {
  return (
    <div className="container-intro-page">
      <h1>{props.title}</h1>
      <form>
        <div className="select-container">
          <label htmlFor="category">Category:</label>
          <select name="category">
            <option value="All">All Categories</option>
          </select>
        </div>
        <div className="select-container">
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty">
            <option value="value">Any Difficulty</option>
          </select>
        </div>
      </form>
      <QuizBtn
        handleClick={props.nextPage}
        className="quiz-btn"
        text="Start quiz"
      />
    </div>
  );
}
