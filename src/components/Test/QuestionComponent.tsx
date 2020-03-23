import React, { useState } from "react";
import "./question.css";

interface QuestionProps {
  id: number;
  question: string;
  answers: string[];
  handleNextQuestion: (answer: string, id: number) => void;
}

const QuestionComponent: React.FC<QuestionProps> = props => {
  const { id, question, answers, handleNextQuestion } = props;
  const [givenAnswer, setGivenAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setGivenAnswer(event.target.value);
  };

  const handleNext = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!givenAnswer) return alert("You have to fill in an answer");
    handleNextQuestion(givenAnswer, id);
  };

  return (
    <div className="container">
      <div className="item">
        <h4>Question</h4>
        <h2>{id}</h2>
      </div>
      <form className="item" onSubmit={handleNext}>
        <h4>{question}</h4>
        <select onChange={handleChange} value={givenAnswer}>
          <option value="">Pick your answer</option>
          {answers.map((answer, index) => (
            <option key={index} value={answer}>
              {answer}
            </option>
          ))}
        </select>
        <button type="submit">Next Question</button>
      </form>
    </div>
  );
};

export default QuestionComponent;
