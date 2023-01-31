import React from "react";
import { difficultyData } from '../../assets/difficultyData'
import { nanoid } from 'nanoid'
import QuizBtn from "../../components/QuizBtn";

export default function Forms(props) {
  const difficultyElements = difficultyData.map(difficulty => (
    <option key={nanoid()} value={difficulty.value}>{difficulty.difficulty}</option>
  ))

  return (
    <div className="container-intro-page">
      <h1>{props.title}</h1>
      <form id="quiz-form">
        <div className="select-container">
          <label htmlFor="category">Category:</label>
          <select name="category">
            <option value="">All Categories</option>
            <option value="entertainment">Entertainment</option>
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
          handleClick={props.nextPage}
          className="quiz-btn"
          id="forms-btn"
          text="Start quiz"
        />
      </form>
    </div>
  );
}
