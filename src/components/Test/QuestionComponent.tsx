import React, { useState } from "react";
import { History } from "history";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";

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
    return (
      <div>
        <FormattedMessage id="app.redirectToHome" />
      </div>
    );
  }

  return (
    <form onSubmit={handleNext}>
      <h3>{question}</h3>
      <div className="questionAnswers">
        {answers.map((answer, index) => (
          <div key={index}>
            <label className="answerLabel">
              <input
                className="radioButton"
                type="radio"
                name="answer"
                value={answer}
                onChange={handleChange}
              />
              {answer}
            </label>
          </div>
        ))}
      </div>

      <Button type="submit">
        <FormattedMessage id="app.nextQuestionButton" />
      </Button>
    </form>
  );
};

export default QuestionComponent;
