import React, { useState } from "react";
import { History } from "history";
import "./question.css";

interface QuestionProps {
  id: number;
  question: string;
  answers: string[];
  handleNextQuestion: (answer: string, id: number) => void;
  history: History;
}

const QuestionComponent: React.FC<QuestionProps> = props => {
  const { id, question, answers, handleNextQuestion, history } = props;
  const [givenAnswer, setGivenAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGivenAnswer(event.target.value);
  };

  const handleNext = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!givenAnswer) return alert("You have to fill in an answer");
    handleNextQuestion(givenAnswer, id);
  };

  if (!question) {
    history.push("/");
    return <div>Terug naar home</div>;
  }

  return (
    <div className="container">
      <form className="item" onSubmit={handleNext}>
        <h4>{question}</h4>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              value={answer}
              onChange={handleChange}
            />
            <label>{answer}</label>
          </div>
        ))}

        <button type="submit">Volgende vraag</button>
      </form>
    </div>
  );
};

export default QuestionComponent;
